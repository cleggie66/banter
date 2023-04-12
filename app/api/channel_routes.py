from flask import Blueprint, redirect, request
from app.models import Channel, User, channel_member, db
from app.models.channel_member import channel_members
from flask_login import current_user, login_required
from flask_wtf.csrf import CSRFProtect, generate_csrf
from ..forms.channel_form import ChannelForm

channel_routes = Blueprint('channels', __name__)

# FULL CRUD

# * -----------  GET  --------------
#  Returns the details of a channel specified by its Id

@channel_routes.route("/<int:channel_id>")
@login_required
def get_single_channels(channel_id):
    channel = Channel.query.get(channel_id)
    return channel.to_dict()


# * -----------  GET  --------------
#  Returns all channels in a Workspace

@channel_routes.route('')
@login_required
def get_all_channels():
    user = User.query.filter(User.id == current_user.id).first()
    channels = user.joined_channels
    return [channel.to_dict_no_messages() for channel in channels]


# TODO -----------  POST  --------------
@channel_routes.route('', methods=['POST'])
@login_required
def create_channel():
    form = ChannelForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_channel = Channel(
            name=form.data['name'],
            workspace_id = form.data['workspace_id'],
            is_channel = form.data['is_channel'],
            users_in_channels = [current_user]
        )   

        db.session.add(new_channel)
        db.session.commit()


        return new_channel.to_dict_simple()
    return 'BAD DATA'



# TODO -----------  PUT  --------------
@channel_routes.route('/<int:channel_id>', methods=['PUT','PATCH'])
@login_required
def update_channel(channel_id):
    edit = request.json

    channel = Channel.query.get(channel_id)
    workspace_owner = channel.channel_in_workspace.owner_id

    if (channel.is_channel == True and workspace_owner != current_user.id):
        return {
            "message": "Unauthorized"
        }, 401

    channel.name = edit['name']
    db.session.commit()
    return channel.to_dict_simple()



# ! -----------  DELETE  --------------
@channel_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_channel_by_id(id):
    channel = Channel.query.get(id)

    db.session.delete(channel)
    db.session.commit()

    return {"message": "Successfully Deleted!"}
