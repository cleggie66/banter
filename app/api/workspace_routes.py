from flask import Blueprint
from app.models import Workspace, User, workspace_member, db
from app.models.workspace_member import workspace_members
from flask_login import current_user, login_required


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


