from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
demo = User(
    username='Demo', password='password', email='demo@aa.io', first_name="Demo", last_name="Lition", profile_picture="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", title="Demo User", about_me="I am a demo user testintg this application!" )
alec = User(
    username='Alec', password='password', email='mod4god@aa.io', first_name="Alec", last_name="Instructor", profile_picture="https://i0.wp.com/d37ck3jytu9wl0.cloudfront.net/wp-content/uploads/2022/05/31141519/Neckbeard-BLOG.jpg?fit=1200%2C777&ssl=1", title="Mod 4 Gate Keeper", about_me="I am the greatest mod 4 instructor of all time")
brad = User(
    username='Brad',  password='password', email='Brad@aa.io', first_name="Brad", last_name="Instructor", profile_picture="https://cdn.vox-cdn.com/thumbor/qqJR3THHUSgAt2ADTGk6_56hjyQ=/0x0:4059x4051/1400x1400/filters:focal(1964x2333:1965x2334)/cdn.vox-cdn.com/uploads/chorus_asset/file/24018802/ND_Zelda_Lead.jpeg", title="Food variable master", about_me="The father of Patches and Blue")

def seed_users():
    db.session.add(demo)
    db.session.add(alec)
    db.session.add(brad)
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
