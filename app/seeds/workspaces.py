from app.models import db, Workspace, environment, SCHEMA
from sqlalchemy.sql import text
from .users import demo, alec, brad, spongebob, patrick, mr_krabs, larry, sandy, squidward, man_ray, bubble_bass, reggie, jim, jack, fred, gene, joe, ken, tony, chrissy, melfi
def seed_workspaces():
    nasa = Workspace(
        owner_id = 16,
        name='NASA',
        icon='https://static01.nyt.com/images/2020/04/14/science/06NASA1/06NASA1-mediumSquareAt3X.jpg',
        users_in_workspaces=[demo, jim, jack, fred, gene, joe, ken]
    )
    badabing = Workspace(
        owner_id = 19,
        name='The Bada Bing',
        icon='https://cdn.dribbble.com/users/337916/screenshots/10284073/media/c208be2c48a4b2498615697c9b5c09b1.png?compress=1&resize=400x300',
        users_in_workspaces=[demo, tony, chrissy, melfi]
    )
    appacademy = Workspace(
        owner_id = 1,
        name='AppAcademy',
        icon='https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/603820afd31232aab368ea6f_New%20Red-logo-emblem.webp',
        users_in_workspaces=[demo, alec, brad]
    )
    bikini_bottom = Workspace(
        owner_id = 1,
        name='Bikini Bottom',
        icon='https://cdn.media.amplience.net/s/hottopic/19373508_hi?$productMainDesktop$',
        users_in_workspaces=[demo, spongebob, patrick, mr_krabs, larry, sandy, squidward, man_ray, bubble_bass, reggie]
    )
    work = Workspace(
        owner_id = 2,
        name='Business',
        icon='https://fcbk.su/_data/stickers/executive_business_fish/executive_business_fish_09.png',
        users_in_workspaces=[demo, alec, brad]
    )

    db.session.add(nasa)
    db.session.add(badabing)
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
