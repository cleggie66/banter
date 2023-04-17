from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
demo = User(
    username='Demo', password='password', email='demo@aa.io', first_name="Demo", last_name="Lition", profile_picture="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", title="Demo User", about_me="I am a demo user testing this application!" )
brandon = User(
    username='brandon', password='password', email='mod1lead@aa.io', first_name="Brandon", last_name="Laursen", profile_picture="https://ca.slack-edge.com/T03GU501J-U0216FJ6S72-c42bc7018587-512", title="Mod 1 Lead", about_me="I love getting BOOSTED")
shane = User(
    username='shane',  password='password', email='@aa.io', first_name="Shane", last_name="Wilkey", profile_picture="https://ca.slack-edge.com/T03GU501J-U01HSECNVRU-35dc9dd5ddc5-512", title="Module 2 Lead Instructor", about_me="THE BIG O OF N")
geoffrey = User(
    username='geoffrey',  password='password', email='@aa.io', first_name="Geoffrey", last_name="Otieno", profile_picture="https://ca.slack-edge.com/T03GU501J-U01GKDE8E6R-05ba9d3138ae-512", title="MOD 3 MASTER", about_me="Pic goes hard, feel free to screenshot")
alec = User(
    username='Alec', password='password', email='mod4god@aa.io', first_name="Alec", last_name="Keeler", profile_picture="https://ca.slack-edge.com/T03GU501J-UMX3Y8ABZ-88abdbbdb2c3-512", title="Mod 4 Gate Keeper", about_me="I am the greatest mod 4 instructor of all time")
dan = User(
    username='',  password='password', email='@aa.io', first_name="", last_name="", profile_picture="https://ca.slack-edge.com/T03GU501J-U0327LT9U5S-f1862c6cb1e0-512", title="Mod 5 Lead", about_me="Javascript Master")
brad = User(
    username='Brad',  password='password', email='brad@aa.io', first_name="Brad", last_name="Simpson", profile_picture="https://ca.slack-edge.com/T03GU501J-USQFVK3GT-947b84c598b8-512", title="Food variable master", about_me="The father of Patches and Blue")
david = User(
    username='DavidN',  password='password', email='david@aa.io', first_name="David", last_name="Nash", profile_picture="https://ca.slack-edge.com/T03GU501J-U020VSQHVU5-bc5b2bc91a6e-512", title="Best TA in town", about_me="I will not rest until the whole world has been assisted")
rogers = User(
    username='DavidR',  password='password', email='ziggy@aa.io', first_name="David", last_name="Rogers", profile_picture="https://avatars.githubusercontent.com/u/75019436?v=4", title="G.O.A.T", about_me="")
slack_bot = User(
    username='slack_bot',  password='password', email='bot@aa.io', first_name="Slack", last_name="Bot", profile_picture="https://ca.slack-edge.com/T03GU501J-U015BUWSSP4-ade0b4e03cd6-512", title="What is my purpose?", about_me="Why do i exist?")

def seed_users():
    db.session.add(demo)
    db.session.add(brandon)
    db.session.add(shane)
    db.session.add(geoffrey)
    db.session.add(alec)
    db.session.add(dan)
    db.session.add(brad)
    db.session.add(david)
    db.session.add(rogers)
    db.session.add(slack_bot)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()
