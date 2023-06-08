from app.models import db, Channel, environment, SCHEMA
from sqlalchemy.sql import text
from .users import demo, alec, brad, spongebob, patrick, mr_krabs, sandy, squidward, larry, bubble_bass, man_ray, jim, jack, fred, gene, joe, ken, chrissy, tony, melfi, tom, greg, logan, kendall, shiv, connor, roman

def seed_channels():
    krusty_krab = Channel(
        name='Krusty Krab',
        workspace_id=4,
        is_channel=True,
        users_in_channels=[demo,spongebob, patrick, mr_krabs, sandy, squidward, larry, bubble_bass, man_ray]
        )
    town_meeting = Channel(
        name='Town Meeting',
        workspace_id=4,
        is_channel=True,
        users_in_channels=[demo,spongebob, patrick, mr_krabs, sandy, squidward, larry, bubble_bass, man_ray]
        )
    salty_spitoon = Channel(
        name='Salty Spitoon',
        workspace_id=4,
        is_channel=True,
        users_in_channels=[demo,spongebob, patrick, mr_krabs, sandy, squidward, larry, bubble_bass, man_ray]
        )
    home_sick = Channel(
        name='Home Sick',
        workspace_id=4,
        is_channel=True,
        users_in_channels=[demo,spongebob, patrick, mr_krabs, sandy, squidward, larry, bubble_bass, man_ray]
        )
    painting = Channel(
        name='The Painting',
        workspace_id=4,
        is_channel=True,
        users_in_channels=[demo,spongebob, patrick, mr_krabs, sandy, squidward, larry, bubble_bass, man_ray]
        )
    wallet = Channel(
        name='Man Ray',
        workspace_id=4,
        is_channel=False,
        users_in_channels=[demo, man_ray]
        )
    krabby_patty = Channel(
        name='Squidward Tentacles',
        workspace_id=4,
        is_channel=False,
        users_in_channels=[demo, squidward]
        )
    stupid_somewhere = Channel(
        name='Sandy Cheeks',
        workspace_id=4,
        is_channel=False,
         users_in_channels=[demo, sandy]
         )
    patrick_dm = Channel(
        name='Patrick Star',
        workspace_id=4,
        is_channel=False,
        users_in_channels=[demo, patrick]
        )
    
    nasa_problem = Channel(
        name='we-have-a-problem',
        workspace_id=1,
        is_channel=True,
        users_in_channels=[demo, jim, jack, fred, gene, joe, ken]
        )
    nasa_launch = Channel(
        name='launch',
        workspace_id=1,
        is_channel=True,
        users_in_channels=[demo, jim, jack, fred, gene, joe, ken]
        )
    nasa_ignition = Channel(
        name='check-ignition',
        workspace_id=1,
        is_channel=True,
        users_in_channels=[demo, jim, jack, fred, gene, joe, ken]
        )

    sopranos_therapy = Channel(
        name='therapy',
        workspace_id=2,
        is_channel=True,
        users_in_channels=[demo, chrissy, tony, melfi]
        )
    sopranos_promotions = Channel(
        name='promotions',
        workspace_id=2,
        is_channel=True,
        users_in_channels=[demo, chrissy, tony, melfi]
        )
    sopranos_general = Channel(
        name='general',
        workspace_id=2,
        is_channel=True,
        users_in_channels=[demo, chrissy, tony, melfi]
        )
    
    waystar_tomlette = Channel(
        name='tomlette',
        workspace_id=3,
        is_channel=True,
        users_in_channels=[demo, greg, tom]
        )
    waystar_scheming = Channel(
        name='scheming',
        workspace_id=3,
        is_channel=True,
        users_in_channels=[demo, connor, kendall, shiv, roman]
        )
    waystar_general = Channel(
        name='general',
        workspace_id=3,
        is_channel=True,
        users_in_channels=[demo, tom, greg, logan, kendall, shiv, connor, roman]
        )
    
    # general = Channel(
    #     name='general',
    #     workspace_id=5,
    #     is_channel=True,
    #     users_in_channels=[demo, alec, brad]
    #     )
    # november = Channel(
    #     name='2022-11-21-online',
    #     workspace_id=5,
    #     is_channel=True,
    #     users_in_channels=[demo, alec, brad]
    #     )
    # lecture = Channel(
    #     name='2022-11-21-lecture-questions',
    #     workspace_id=5,
    #     is_channel=True,
    #     users_in_channels=[demo, alec, brad]
    #     )
    # project = Channel(
    #     name='lecture questions',
    #     workspace_id=5,
    #     is_channel=True,
    #     users_in_channels=[demo, alec, brad]
    #     )
    # dm = Channel(
    #     name='Brad Instructor',
    #     workspace_id=5,
    #     is_channel=False,
    #     users_in_channels=[demo, brad]
    #     )




    # db.session.add(general)
    # db.session.add(november)
    # db.session.add(lecture)
    # db.session.add(project)
    # db.session.add(dm)
    db.session.add(krusty_krab)
    db.session.add(town_meeting)
    db.session.add(salty_spitoon)
    db.session.add(home_sick)
    db.session.add(painting)
    db.session.add(wallet)
    db.session.add(krabby_patty)
    db.session.add(stupid_somewhere)
    db.session.add(patrick_dm)
    db.session.add(nasa_problem)
    db.session.add(nasa_launch)
    db.session.add(nasa_ignition)
    db.session.add(sopranos_therapy)
    db.session.add(sopranos_promotions)
    db.session.add(sopranos_general)
    db.session.add(waystar_tomlette)
    db.session.add(waystar_scheming)
    db.session.add(waystar_general)


    db.session.commit()
def undo_channels():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.channel_members RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.channels RESTART IDENTITY CASCADE;")

    else:
        db.session.execute(text("DELETE FROM channel_members"))
        db.session.execute(text("DELETE FROM channels"))


    db.session.commit()
