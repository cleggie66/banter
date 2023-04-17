from app.models import db, Channel, environment, SCHEMA
from sqlalchemy.sql import text
from .users import demo, brandon, shane, geoffrey, alec, dan, brad, david, rogers, slack_bot

def seed_channels():
    general = Channel(
        name='general', workspace_id=1, is_channel=True, users_in_channels=[demo, brandon, shane, geoffrey, alec, dan, brad, david, rogers, slack_bot])
    november = Channel(
        name='2022-11-21-online', workspace_id=1, is_channel=True, users_in_channels=[demo, brandon, shane, geoffrey, alec, dan, brad, david, rogers, slack_bot])
    lecture = Channel(
        name='2022-11-21-lecture-questions', workspace_id=1, is_channel=True, users_in_channels=[demo, brandon, shane, geoffrey, alec, dan, brad, david, rogers, slack_bot])
    project = Channel(
        name='group-project', workspace_id=1, is_channel=True, users_in_channels=[demo, alec, brad])
    staff = Channel(
        name='staff', workspace_id=1, is_channel=False, users_in_channels=[demo, brandon, shane, geoffrey, alec, dan, brad, david, rogers, slack_bot])
    dm_brad = Channel(
        name='Brad DM', workspace_id=1, is_channel=False, users_in_channels=[demo, brad])
    dm_brandon = Channel(
        name='Brandon DM', workspace_id=1, is_channel=False, users_in_channels=[demo, brandon])

    db.session.add(general)
    db.session.add(november)
    db.session.add(lecture)
    db.session.add(project)
    db.session.add(staff)
    db.session.add(dm_brad)
    db.session.add(dm_brandon)
    db.session.commit()

def undo_channels():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.channel_members RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.channels RESTART IDENTITY CASCADE;")

    else:
        db.session.execute(text("DELETE FROM channel_members"))
        db.session.execute(text("DELETE FROM channels"))


    db.session.commit()
