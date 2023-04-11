from flask import Blueprint, request
from flask_login import login_required
from app.models import User
from app import db

user_routes = Blueprint('users', __name__)


# * -----------  GET  --------------
#Query for all users and returns them in a list of user dictionaries

@user_routes.route('/')
@login_required
def users():

    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


# * -----------  GET  --------------
# Query for a user by id and returns that user in a dictionary

@user_routes.route('/<int:id>')
@login_required
def user(id):

    user = User.query.get(id)
    return user.to_dict()


# TODO -----------  PUT  --------------
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