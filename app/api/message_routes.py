from flask import Blueprint, request
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
def get_channel_messages(channel_id):
    messages = Message.query.filter(Message.channel_id == channel_id)
    return [message.to_dict_simple() for message in messages]


@message_routes.route('/<message_id>', methods=['PUT'])
def update_message(message_id):
    message = Message.query.get(message_id)
    return message.to_dict_simple()
