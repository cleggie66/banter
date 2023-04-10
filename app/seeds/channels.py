from app.models import db, Channel, environment, SCHEMA
from sqlalchemy.sql import text


def seed_channels():
    general = Channel(
        name='general', workspace_id=1, ischannel=True)
    november = Channel(
        name='2022-11-21-online', workspace_id=1, ischannel=True)
    lecture = Channel(
        name='2022-11-21-lecture-questions', workspace_id=1, ischannel=True)
    project = Channel(
        name='lecture questions', workspace_id=1, ischannel=True)
    dm = Channel(
        name='direct message', workspace_id=1, ischannel=False)
    dgm = Channel(
        name='direct group message', workspace_id=1, ischannel=False)

    db.session.add(general)
    db.session.add(november)
    db.session.add(lecture)
    db.session.add(project)
    db.session.add(dm)
    db.session.add(dgm)
    db.session.commit()


def undo_channels():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.channels RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM channels"))

    db.session.commit()
