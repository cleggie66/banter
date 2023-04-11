from app.models import db, Channel, environment, SCHEMA
from sqlalchemy.sql import text
from .users import demo, alec, brad

def seed_channels():
    general = Channel(
        name='general', workspace_id=1, is_channel=True, users_in_channels=[demo, alec, brad])
    november = Channel(
        name='2022-11-21-online', workspace_id=1, is_channel=True, users_in_channels=[demo, alec, brad])
    lecture = Channel(
        name='2022-11-21-lecture-questions', workspace_id=1, is_channel=True, users_in_channels=[demo, alec, brad])
    project = Channel(
        name='lecture questions', workspace_id=1, is_channel=True, users_in_channels=[demo, alec, brad])
    dm = Channel(
        name='direct message', workspace_id=1, is_channel=False, users_in_channels=[demo, brad])
    dgm = Channel(
        name='direct group message', workspace_id=1, is_channel=False, users_in_channels=[demo, alec, brad])

    db.session.add(general)
    db.session.add(november)
    db.session.add(lecture)
    db.session.add(project)
    db.session.add(dm)
    db.session.add(dgm)
    db.session.commit()

def undo_channels():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.channel_members RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.channels RESTART IDENTITY CASCADE;")

    else:
        db.session.execute(text("DELETE FROM channel_members"))
        db.session.execute(text("DELETE FROM channels"))


    db.session.commit()
