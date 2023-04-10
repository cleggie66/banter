from flask import Blueprint
from app.models import Channel, channel_member
from flask_login import current_user, login_required

channel_routes = Blueprint('channels', __name__)

# FULL CRUD

@channel_routes.route("")
@login_required
def get_all_channels():
    channels = Channel.query.all()
    return channels[0].to_dict()