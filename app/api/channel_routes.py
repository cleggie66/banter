from flask import Blueprint, redirect, request
from app.models import Channel, User, channel_member, db
from flask_login import current_user, login_required
from flask_wtf.csrf import CSRFProtect, generate_csrf
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
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_channel = Channel()
        form.populate_obj(new_channel)
        db.session.add(new_channel)
        db.session.commit()
        return redirect(f"/channels/{new_channel.id}")
    return 'BAD DATA'
