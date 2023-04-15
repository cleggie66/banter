from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import User, Workspace, Channel
from app import db
import random
from ..utils import pog 
user_routes = Blueprint('users', __name__)


# * -----------  GET  --------------
#Query for all users and returns them in a list of user dictionaries

@user_routes.route('/')
@login_required
def users():

    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/current')
@login_required
def get_current_user():
    user = User.query.get(current_user.id)
    return user.to_dict()

# * -----------  GET  --------------
# Search all users by their username
@user_routes.route('/<string:username>')
@login_required
def search_all_users(username):
    users = User.query.filter(User.username.like(f"{username}%")).all()
    pog(users)
    return [user.to_dict_search() for user in users]


# * -----------  GET  --------------
# Query for a user by id and returns that user in a dictionary

@user_routes.route('/<int:id>')
@login_required
def user(id):

    user = User.query.get(id)
    return user.to_dict()







# -----------  PUT  --------------
#  Update a user by id and returns that user in a dictionary

@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_user(id):

    user = User.query.get(id)

    if not user:
        return 'User not found', 404

    user.username = request.json.get('username', user.username)
    user.email = request.json.get('email', user.email)
    user.password = request.json.get('password', user.password)
    user.first_name = request.json.get('first_name', user.first_name)
    user.last_name = request.json.get('last_name', user.last_name)
    user.profile_picture = request.json.get('profile_picture', user.profile_picture)
    user.title = request.json.get('title', user.title)
    user.about_me = request.json.get('about_me', user.about_me)
    db.session.commit()
    return user.to_dict()


# ! -----------  DELETE  --------------
# Delete a user by id and returns a success message
# TODO workspace_id error needs to be addressed

@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_user(id):

    user = User.query.get(id)
    if user is None:
        return 'User not found', 404


    if user.id != current_user.id:
        return {"message": "Unauthorized"}, 401


    # todo **********************************
    # workspaces = Workspace.query.filter(Workspace.owner_id == user.id).all()
    # workspace_users = [workspace.users_in_workspaces for workspace in workspaces]




    # if len(workspace_users) <= 1:
    #     return {"message": "no other user to assign ownership to"}


    # for workspace in workspaces:
    #     for workspace_user in workspace.users_in_workspaces:
    #         if workspace_user.id == user.id:
    #             continue
    #         else:
    #             workspace.owner_id = workspace_user.id
    #             db.session.commit()
    # todo **********************************


    db.session.delete(user)
    db.session.commit()

    return {"message": "Successfully Deleted!"}, 200
