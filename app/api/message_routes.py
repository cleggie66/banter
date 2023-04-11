from flask import Blueprint, request, redirect
from flask_login import current_user, login_required
from ..forms.message_form import MessageForm
from app.models import Message, db, Channel

message_routes = Blueprint('messages', __name__)


# FULL CRUD

# @channel_routes.route('', methods=['GET','POST'])
# @login_required
# def create_channel():
#     form = ChannelForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():

#         new_channel = Channel(
#             name=form.data['name'],
#             workspace_id = form.data['workspace_id'],
#             is_channel = form.data['is_channel'],
#             users_in_channels = [current_user]
#         )

#         db.session.add(new_channel)
#         db.session.commit()


#         return redirect(f"/channels/{new_channel.id}")
#     return 'BAD DATA'

# @channel_routes.route('/<int:channel_id>', methods=['PUT','PATCH'])
# @login_required
# def update_channel(channel_id):
#     edit = request.json

#     channel = Channel.query.get(channel_id)
#     workspace_owner = channel.channel_in_workspace.owner_id

#     if (channel.is_channel == True and workspace_owner != current_user.id):
#         return {
#             "message": "Unauthorized"
#         }, 401

#     channel.name = edit['name']
#     db.session.commit()
#     return redirect(f"/channels/{channel.id}")


@message_routes.route('/<message_id>', methods=['PUT'])
@login_required
def update_message(message_id):
    edit = request.json
    message = Message.query.get(message_id)
    message.content = edit['content']
    db.session.commit()
    return redirect(f"/channels/{message.id}")


@message_routes.route('', methods=['POST'])
@login_required
def create_message():
    form = MessageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        new_message = Message(
            content = form.data['content'],
            user_id = current_user.id,
            channel_id = request.json['channel_id']
        )

        db.session.add(new_message)
        db.session.commit()

        return new_message
    return 'BAD DATA'


@message_routes.route('/<channel_id>')
@login_required
def get_channel_messages(channel_id):
    messages = Message.query.filter(Message.channel_id == channel_id)
    return [message.to_dict_simple() for message in messages]


@message_routes.route('/<message_id>')
