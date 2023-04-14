from flask import Blueprint, redirect, request
from app.models import Channel, User, Message, channel_member, db
from app.models.channel_member import channel_members
from flask_login import current_user, login_required
from flask_wtf.csrf import CSRFProtect, generate_csrf
from ..forms.channel_form import ChannelForm
from ..utils import pog

channel_routes = Blueprint('channels', __name__)

# FULL CRUD


# * -----------  GET  --------------
#  Returns the users of a channel specified by its Id

@channel_routes.route("/<channel_id>/users")
@login_required
def get_single_channel_users(channel_id):
    channel = Channel.query.get(channel_id)

    if not channel:
        return {
            "message": "Channel could not be found",
            "status_code": 404
        }, 404

    if not channel.users_in_channel:
        return {"No users in this channel"}

    return {"Users": [user.to_dict_simple() for user in channel.users_in_channels]}


# * -----------  GET  --------------
#  Returns the details of a channel specified by its Id

@channel_routes.route("/<int:channel_id>")
@login_required
def get_single_channel(channel_id):
    channel = Channel.query.get(channel_id)
    if not channel:
        return {
            "message": "Channel could not be found",
            "status_code": 404
        }, 404
    # return channel.to_dict()
    # Adding special to_dict() for messages
    return channel.to_dict_message_details()
     


# * -----------  GET  --------------
#  Returns all messages in a channel

@channel_routes.route('/<channel_id>/messages')
@login_required
def get_channel_messages(channel_id):
    messages = Message.query.filter(Message.channel_id == channel_id)
    if not messages:
        return {
            "message": "Channel could not be found",
            "status_code": 404
        }, 404
    return {"messages": [message.to_big_dict() for message in messages]}


# * -----------  GET  --------------
#  Returns all of the current user's channels

@channel_routes.route('')
@login_required
def get_all_channels():
    user = User.query.filter(User.id == current_user.id).first()
    channels = user.joined_channels
    return [channel.to_dict_no_messages() for channel in channels]


# * -----------  POST  --------------
# Adds a user to a channel

@channel_routes.route("/<channel_id>/users", methods=['POST'])
@login_required
def add_user_to_channel(channel_id):
    channel = Channel.query.get(channel_id)
    if not channel:
        return {
            "message": "Channel could not be found",
            "status_code": 404
        }, 404

    user = User.query.get(request.json['user_id'])
    if not user:
        return {
            "message": "User could not be found",
            "status_code": 404
        }, 404

    # for channel2 in user.joined_channels:
    #     if channel2.id == channel.id:
    #         return {"message": "User is already in channel"}

    channel.users_in_channels.append(user)
    user.joined_channels.append(channel)

    db.session.commit()

    return {"message": "Added user to the channel"}


# * -----------  DELETE  --------------
# Removes a user from a channel

@channel_routes.route("/<channel_id>/users", methods=['DELETE'])
@login_required
def remove_user_from_channel(channel_id):

    channel = Channel.query.get(channel_id)
    if not channel:
        return {
            "message": "Channel could not be found",
            "status_code": 404
        }, 404

    user = User.query.get(request.json['user_id'])
    if not user:
        return {
            "message": "User could not be found",
            "status_code": 404
        }, 404


    for user2 in channel.users_in_channels:
        if user2.id == user.id:
            channel.users_in_channels.remove(user)

    for channel2 in user.joined_channels:
        if channel2.id == channel.id:
            user.joined_channels.remove(channel)


    db.session.commit()

    return {"message": "Removed user from channel"}


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
@channel_routes.route('/<channel_id>', methods=['PUT'])
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
    # pog(channel, edit, workspace_owner)
    return channel.to_dict_simple()


# ! -----------  DELETE  --------------

@channel_routes.route('/<channel_id>', methods=['DELETE'])
@login_required
def delete_channel_by_id(channel_id):
    channel = Channel.query.get(channel_id)

    if not channel:
        return {"message": "channel not found"}, 404

    channel_member_ids = [users.id for users in channel.users_in_channels]

    if current_user.id not in channel_member_ids:
        return {"message": "User is not in channel"}, 401

    pog(channel)
    db.session.delete(channel)
    db.session.commit()

    return {"message": "Successfully Deleted!"}
