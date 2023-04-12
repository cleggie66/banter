from flask import Blueprint, redirect, request
from app.models import Workspace, User, workspace_member, db
from app.models.workspace_member import workspace_members
from flask_login import current_user, login_required
from ..forms.workspace_form import WorkspaceForm
from flask_wtf.csrf import CSRFProtect, generate_csrf


workspace_routes = Blueprint('workspaces', __name__)

# CREATE AND READ

# * -----------  GET  --------------
# Returns the details of a workspace specified by its Id
@workspace_routes.route("/<int:workspace_id>")
@login_required
def get_single_workspace(workspace_id):
    workspace = Workspace.query.get(workspace_id)
    return workspace.to_dict_simple()


# * -----------  GET  --------------
# Returns all Workspaces that the user is a part of

@workspace_routes.route('')
@login_required
def get_all_workspaces():
    user = User.query.filter(User.id == current_user.id).first()
    workspaces = user.joined_workspaces
    return [workspace.to_dict_simple() for workspace in workspaces]


# TODO -----------  POST  --------------
# Create a workspace

@workspace_routes.route('', methods=['POST'])
@login_required
def create_workspace():
    form = WorkspaceForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        new_workspace = Workspace(
            owner_id = current_user.id,
            name=form.data['name'],
            icon=form.data['icon']
        )

        db.session.add(new_workspace)
        db.session.commit()

        return new_workspace.to_dict_simple()
    return {"message": "Bad data"}


# ! -----------  DELETE  --------------
# Delete a workspace

@workspace_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_workspace_by_id(id):
    workspace = Workspace.query.get(id)

    db.session.delete(workspace)
    db.session.commit()

    return {"message": "Successfully Deleted!"}

