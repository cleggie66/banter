from app.models import db, Workspace, environment, SCHEMA
from sqlalchemy.sql import text
from .users import demo, alec, brad, spongebob, patrick, mr_krabs, larry, sandy, squidward, man_ray, bubble_bass, reggie
def seed_workspaces():
    appacademy = Workspace(
        owner_id = 1,
        name='AppAcademy',
        icon='https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png',
        users_in_workspaces=[demo, alec, brad]
    )
    bikini_bottom = Workspace(
        owner_id = 1,
        name='Bikini Bottom',
        icon='https://wallpapercave.com/wp/wp6073059.png',
        users_in_workspaces=[demo, spongebob, patrick, mr_krabs, larry, sandy, squidward, man_ray, bubble_bass, reggie]
    )
    work = Workspace(
        owner_id = 2,
        name='Business',
        icon='https://fcbk.su/_data/stickers/executive_business_fish/executive_business_fish_09.png',
        users_in_workspaces=[demo, alec, brad]
    )

    db.session.add(appacademy)
    db.session.add(bikini_bottom)
    db.session.add(work)
    db.session.commit()


def undo_workspaces():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.workspace_members RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.workspaces RESTART IDENTITY CASCADE;")

    else:
        db.session.execute(text("DELETE FROM workspace_members"))
        db.session.execute(text("DELETE FROM workspaces"))


    db.session.commit()
