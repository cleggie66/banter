from app.models import db, Channel, environment, SCHEMA
from app.models.channel import ChannelMember
from sqlalchemy.sql import text


def seed_channels():
    gen = Channel(
        channel_name='general', description='gen chat', owner_id=1)
    help = Channel(
        channel_name='help', description='help chat', owner_id=1)

    db.session.add(gen)
    db.session.add(help)
    db.session.commit()


def undo_channels():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.channels RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM channels"))

    db.session.commit()


def seed_channel_users():
    user1 = ChannelMember(
        user_id=1, channel_id=1
    )

    user2 = ChannelMember(
        user_id=2, channel_id=1
    )

    db.session.add(user1)
    db.session.add(user2)
    db.session.commit()


def undo_channel_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.channel_users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM channel_users"))

    db.session.commit()
