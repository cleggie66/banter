from flask import Blueprint
from app.models import Channel, User, channel_member
from flask_login import current_user, login_required

channel_routes = Blueprint('channels', __name__)

# FULL CRUD

@channel_routes.route("")
@login_required
def get_all_channels():
    user = User.query.filter(User.id == current_user.id).first()
    channels = user.joined_channels
    return channels