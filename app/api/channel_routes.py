from flask import Blueprint, redirect
from app.models import Channel, User, channel_member, db
from flask_login import current_user, login_required
from ..forms.channel_form import ChannelForm

channel_routes = Blueprint('channels', __name__)

# FULL CRUD

@channel_routes.route("/<channel_id>")
@login_required
def get_single_channels(channel_id):
    channel = Channel.query.get(channel_id)
    return channel.to_dict()


@channel_routes.route("")
@login_required
def get_all_channels():
    user = User.query.filter(User.id == current_user.id).first()
    channels = user.joined_channels
    return channels


@channel_routes.route('/create-channel', methods=['GET','POST'])
@login_required
def create_channel():
    form = ChannelForm()
    if form.validate_on_submit():
        new_channel = Channel()
        new_channel.populate_obj(form)
        db.session.add(new_channel)
        db.session.commit()
        return redirect(f"/channels/{new_channel.id}")
    return 'BAD DATA'
