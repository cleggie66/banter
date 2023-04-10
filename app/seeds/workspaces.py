from app.models import db, Workspace, environment, SCHEMA
from sqlalchemy.sql import text

def seed_workspaces():
    appacademy = Workspace(
        owner_id = 1,
        name='AppAcademy',
        icon='https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png'
    )
    gamers = Workspace(
        owner_id = 1,
        name='Gamers', 
        icon='https://1000logos.net/wp-content/uploads/2017/07/Emblem-N64.jpg'
    )
    work = Workspace(
        owner_id = 2,
        name='Business',
        icon='https://fcbk.su/_data/stickers/executive_business_fish/executive_business_fish_09.png'
    )

    db.session.add(appacademy)
    db.session.add(gamers)
    db.session.add(work)
    db.session.commit()


def undo_workspaces():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.workspaces RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM workspaces"))

    db.session.commit()
