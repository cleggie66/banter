from flask import Blueprint, request, redirect
from flask_login import current_user, login_required
from ..forms.message_form import MessageForm
from app.models import Message, db, Channel

message_routes = Blueprint('messages', __name__)


@message_routes.route('/<int:message_id>', methods=['PUT'])
@login_required
def update_message(message_id):
    edit = request.json
    message = Message.query.get(message_id)

    if not message:
        return {
            "message": "Message could not be found",
            "status_code": 404
        }, 404

    if message.user_id != current_user.id:
        return {
            "message": "Forbidden",
            "status_code": 403
        }, 403

    message.content = edit['content']
    db.session.commit()
    return message.to_dict_simple()


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

        return new_message.to_dict_simple()
    return 'BAD DATA'


@message_routes.route('/<message_id>', methods=['DELETE'])
@login_required
def delete_message(message_id):
    message = Message.query.get(message_id)

    if not message:
        return {
            "message": "Message could not be found",
            "status_code": 404
        }, 404

    if message.user_id != current_user.id:
        return {
            "message": "Forbidden",
            "status_code": 403
        }, 403

    db.session.delete(message)
    db.session.commit()
    return {"message": "Successfully Deleted!"}
