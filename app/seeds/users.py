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

jim = User(username='CDR', password='password', email='CDR@nasa.org', first_name="Jim", last_name="Lovell", profile_picture="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Jim-Lovell.Apollo-13.webp", title="Commander", about_me="As the commander of Apollo 13, I am Jim Lovell, a resilient astronaut who faced adversity in space and led my crew through a harrowing mission to safely return to Earth.") 
jack = User(username='CMP', password='password', email='CMP@nasa.org', first_name="Jack", last_name="Swigert", profile_picture="https://dejareviewer.files.wordpress.com/2014/11/kevin-bacon-in-apollo-13.jpg", title="Command Module Pilot", about_me="I am Jack Swigert, the command module pilot of Apollo 13, who stepped in as a last-minute replacement and played a critical role in troubleshooting the spacecraft's issues during the mission.") 
fred = User(username='LMP', password='password', email='LMP@nasa.org', first_name="Fred", last_name="Haise", profile_picture="https://i0.wp.com/cms.sofrep.com/wp-content/uploads/2017/02/Apollo13_bluray.jpg?fit=580%2C273&ssl=1&w=800", title="Lunar Module Pilot", about_me=" I am Fred Haise, the lunar module pilot for Apollo 13, who experienced the disappointment of not landing on the moon but remained dedicated to the mission's success and the safe return of the crew.") 
gene = User(username='F', password='password', email='F@nasa.org', first_name="Gene", last_name="Kranz", profile_picture="https://forcefedscifi.com/wp-content/uploads/2019/07/Ed-Harris-Apollo-13.png", title="Lead Flight Director", about_me="I am Gene Kranz, the flight director for Apollo 13, leading the team at mission control in Houston and orchestrating a remarkable rescue mission to bring the astronauts back home.") 
joe = User(username='CAP COMM', password='password', email='CC@nasa.org', first_name="Joe", last_name="Kerwin", profile_picture="https://pbs.twimg.com/media/Eujh-w8XIAExwRP.jpg", title="CAP COMM", about_me="As one of the flight controllers during the Apollo 13 mission, I'm a key member of the team that worked tirelessly to troubleshoot and find solutions for the spacecraft's critical situation, ultimately ensuring the safe return of the crew.") 
ken = User(username='LCC', password='password', email='LCC@nasa.org', first_name="Ken", last_name="Mattingly", profile_picture="https://jonathondsvendsen.files.wordpress.com/2015/06/mattingly.jpg", title="Launch Control Center", about_me="As the original command module pilot for Apollo 13, I am Ken Mattingly, who was grounded due to exposure to measles but played a crucial role in helping solve the mission's technical challenges from Earth.") 

tony = User(username='tony', password='password', email='tony@badabing.io', first_name="Tony", last_name="Soprano", profile_picture="https://lifethroughalensdotblog.files.wordpress.com/2018/04/james-gandolfini1.jpeg?w=600", title="Boss", about_me="a family man and a respected mob boss trying to navigate the complexities of the criminal underworld while dealing with my own personal struggles.") 
chrissy = User(username='chrissy', password='password', email='chrissy@badabing.io', first_name="Christopher", last_name="Moltisanti", profile_picture="https://upload.wikimedia.org/wikipedia/en/f/ff/Christopher_Moltisanti.jpg", title="Made man", about_me="Tony's nephew and a rising member of the family, trying to prove myself and find success in the mob world while battling my own demons.") 
melfi = User(username='melfi', password='password', email='melfi@badabing.io', first_name="Jennifer", last_name="Melfi", profile_picture="https://telltaletv.com/wp-content/uploads/2022/08/5b654515-a0e0-4b79-b608-62d450b7066f_screenshot.jpeg", title="Therapist", about_me="Tony's psychiatrist, tasked with the challenge of treating a mobster while grappling with the ethical complexities of my profession.") 

tom = User(username='TomWambsgans', password='password', email='TomWambsgans@waystar.co', first_name="Tom", last_name="Wambsgans", profile_picture="https://static.hbo.com/content/dam/hbodata/series/succession/character/tom-wambsgans/tom-wambsgans-s1-1920.jpg", title="", about_me="") 
greg = User(username='GregHirsch', password='password', email='GregHirsch@waystar.co', first_name="Greg", last_name="Hirsch", profile_picture="https://tvline.com/wp-content/uploads/2021/11/succession-season-3-episode-4-greg.jpg?w=619", title="", about_me="") 
logan = User(username='LoganRoy', password='password', email='LoganRoy@waystar.co', first_name="Logan", last_name="Roy", profile_picture="https://www.pinkvilla.com/images/2023-04/684888629_logan-roy-succession-season-4_1280*720.jpg", title="", about_me="") 
kendall = User(username='KendallRoy', password='password', email='KendallRoy@waystar.co', first_name="Kendall", last_name="Roy", profile_picture="https://media.gq-magazine.co.uk/photos/5da09d57d8907900082b7e10/master/pass/20191011-Succession-03.jpg", title="", about_me="") 
shiv = User(username='ShivRoy', password='password', email='ShivRoy@waystar.co', first_name="Shiv", last_name="Roy", profile_picture="https://akns-images.eonline.com/eol_images/Entire_Site/2020628/rs_1200x1200-200728155419-1200-succession-9.ct.072820.jpg?fit=around%7C1080:540&output-quality=90&crop=1080:540;center,top", title="", about_me="") 
connor = User(username='ConnorRoy', password='password', email='ConnorRoy@waystar.co', first_name="Connor", last_name="Roy", profile_picture="https://static.hbo.com/2021-10/connor-roy-s1-1920.jpg", title="", about_me="") 
roman = User(username='RomanRoy', password='password', email='RomanRoy@waystar.co', first_name="Roman", last_name="Roy", profile_picture="https://hips.hearstapps.com/hmg-prod/images/succession-roman-1-64010771d6fe0.jpg?crop=0.491xw:1.00xh;0.210xw,0&resize=1200:*", title="", about_me="") 



# reggie = User(username='', password='password', email='@aa.io', first_name="", last_name="", profile_picture="", title="", about_me="") 


def seed_users():
    db.session.add(demo)
    db.session.add(alec)
    db.session.add(brad)

    db.session.add(spongebob) #4
    db.session.add(patrick)
    db.session.add(mr_krabs)
    db.session.add(squidward)
    db.session.add(sandy)
    db.session.add(larry)
    db.session.add(bubble_bass)
    db.session.add(man_ray)
    db.session.add(reggie)

    db.session.add(jim) # 13
    db.session.add(jack)
    db.session.add(fred)
    db.session.add(gene)
    db.session.add(joe)
    db.session.add(ken)

    db.session.add(tony) #19
    db.session.add(chrissy)
    db.session.add(melfi)

    db.session.add(tom) #22
    db.session.add(greg)
    db.session.add(logan)
    db.session.add(kendall)
    db.session.add(shiv)
    db.session.add(connor)
    db.session.add(roman) #28

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
