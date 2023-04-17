from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
demo = User(
    username='Demo', password='password', email='demo@aa.io', first_name="Demo", last_name="Lition", profile_picture="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg", title="Demo User", about_me="I am a demo user testintg this application!" )
alec = User(
    username='Alec', password='password', email='mod4god@aa.io', first_name="Alec", last_name="Instructor", profile_picture="https://i0.wp.com/d37ck3jytu9wl0.cloudfront.net/wp-content/uploads/2022/05/31141519/Neckbeard-BLOG.jpg?fit=1200%2C777&ssl=1", title="Mod 4 Gate Keeper", about_me="I am the greatest mod 4 instructor of all time")
brad = User(
    username='Brad',  password='password', email='Brad@aa.io', first_name="Brad", last_name="Instructor", profile_picture="https://cdn.vox-cdn.com/thumbor/qqJR3THHUSgAt2ADTGk6_56hjyQ=/0x0:4059x4051/1400x1400/filters:focal(1964x2333:1965x2334)/cdn.vox-cdn.com/uploads/chorus_asset/file/24018802/ND_Zelda_Lead.jpeg", title="Food variable master", about_me="The father of Patches and Blue")
spongebob = User(
    username='spongebob',  password='password', email='spongebob@aa.io', first_name="Spongebob", last_name="Squarepants", profile_picture="https://www.freepnglogos.com/uploads/spongebob-png/ish-twitter-quot-redrew-favorite-scene-spongebob-9.png", title="Fry Cook", about_me="I'm a joyful sea sponge who lives in a pineapple with my pet snail gary") 
patrick = User(
    username='patrick',  password='password', email='patrick@aa.io', first_name="Patrick", last_name="Star", profile_picture="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png", title="Dr Professor Patrick to you", about_me="I live under a rock in Bikini Bottom. Hmu for embarrassing photos of Spongebob at last years christmas party") 
mr_krabs = User(
    username='MrKrabs',  password='password', email='MrKrabs@aa.io', first_name="Mr", last_name="Krabs", profile_picture="https://www.pngkey.com/png/full/435-4350208_mr-krabs-png-spongebob-mr-krabs-png.png", title="CEO of the Krusty Krab", about_me="Hi, I like money.") 
squidward = User(
    username='squidward',  password='password', email='squidward@aa.io', first_name="Squidward", last_name="Tentacles", profile_picture="https://is4-ssl.mzstatic.com/image/thumb/Video118/v4/4c/36/79/4c3679e8-4b33-ccea-ce28-c205652f845a/Jobbda093ff-fcef-4128-87fc-2b501bac952c-97368840-PreviewImage_Chocolate-Time1498404492754.png/1200x675.jpg", title="Divine talent", about_me="The most unrecognized talent in all of Bikini Bottom.") 
sandy = User(
    username='sandy',  password='password', email='sandy@aa.io', first_name="Sandy", last_name="Cheeks", profile_picture="https://comicvine.gamespot.com/a/uploads/scale_small/11132/111325030/5880115-spongebob%20squarepants%20sandy%20cheeks.jpg", title="Scientist and Karate Master", about_me="I wish I was back in Texas") 
larry = User(
    username='larry',  password='password', email='larry@aa.io', first_name="Larry", last_name="Lobster", profile_picture="https://i.pinimg.com/550x/e4/73/4e/e4734efaed57f5d9a800586dd85e43a5.jpg", title="Living like Larry", about_me="Thanks, I workout") 
bubble_bass = User(
    username='bubblebass',  password='password', email='bubblebass@aa.io', first_name="Bubble", last_name="Bass", profile_picture="https://i.kym-cdn.com/entries/icons/mobile/000/026/636/Screen_Shot_2018-08-20_at_7.12.25_PM.jpg", title="Burger Connoisseur", about_me="I live for krabby pattys but only made my way") 
man_ray = User(
    username='manray',  password='password', email='manray@aa.io', first_name="Man", last_name="Ray", profile_picture="https://www.vhv.rs/dpng/d/482-4827175_man-ray-is-the-second-major-archenemy-of.png", title="Arch Villain", about_me="I am pure evil, watch out Bikini Bottom") 
reggie = User(
    username='reggie',  password='password', email='reggie@aa.io', first_name="Reggie", last_name="Fish", profile_picture="https://i.ytimg.com/vi/vySI1ld25bs/hqdefault.jpg", title="Bouncer", about_me="To get in the salty spitoon, you gotta have muscles on your muscles") 


def seed_users():
    db.session.add(demo)
    db.session.add(alec)
    db.session.add(brad)
    db.session.add(spongebob)
    db.session.add(patrick)
    db.session.add(mr_krabs)
    db.session.add(squidward)
    db.session.add(sandy)
    db.session.add(larry)
    db.session.add(bubble_bass)
    db.session.add(man_ray)
    db.session.add(reggie)
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
