from flask import Blueprint
from app.models import Channel

channel_routes = Blueprint('channels', __name__)

# FULL CRUD
















# ! DELETE
@channel_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_channel_by_id(id):
    channel = Channel.query.get(id)

    db.session.delete(channel)
    db.session.commit()

    return {"message": "Successfully Deleted!"}
