from app.models import db, WorkSpace, environment, SCHEMA
from sqlalchemy.sql import text

def seed_workspaces():
appacademy = WorkSpace(
    name='AppAcademy', icon='placeholder')
gamers = WorkSpace(
    name='Gamers', icon='placeholder2')
work = WorkSpace(
    name='Work', icon='palceholder3')

db.session.add(appacademy)
db.session.add(gamers)
db.session.add(work)
db.session.commit()