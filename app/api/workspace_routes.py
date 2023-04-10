from flask import Blueprint
from app.models import Workspace


workspace_routes = Blueprint('workspaces', __name__)

# CREATE AND READ
