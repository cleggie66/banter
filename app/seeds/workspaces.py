from app.models import db, Workspace, environment, SCHEMA
from sqlalchemy.sql import text

def seed_workspaces():
    appacademy = Workspace(
        name='AppAcademy', icon='placeholder')
    gamers = Workspace(
        name='Gamers', icon='placeholder2')
    work = Workspace(
        name='Work', icon='palceholder3')

db.session.add(appacademy)
db.session.add(gamers)
db.session.add(work)
db.session.commit()


def undo_workspaces():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.workspaces RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM workspaces"))

    db session.commit()