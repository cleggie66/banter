from app.models import db, Message, environment, SCHEMA
from sqlalchemy.sql import text

def seed_messages():
    dm_1 = Message(
        content="I would say that is a good, but not great answer.",
        user_id = 1,
        channel_id = 1,
    )
    dm_2 = Message(
        content="I would say that is a good, but not great answer.",
        user_id = 1,
        channel_id = 2,
    )
    dm_3 = Message(
        content="I would say that is a good, but not great answer.",
        user_id = 1,
        channel_id = 3,
    )
    dm_4 = Message(
        content="I would say that is a good, but not great answer.",
        user_id = 1,
        channel_id = 4,
    )
    dm_5 = Message(
        content="wow, nice direct message",
        user_id = 1,
        channel_id = 5,
    )
    dm_6 = Message(
        content="You like krabby patties don't you, Squidward?",
        user_id = 1,
        channel_id = 12,
    )
    dm_7 = Message(
        content="YES, YEEEEAAAAHHHHAHAHAAA. YES I LOVE KRABBY PATTIES",
        user_id = 7,
        channel_id = 12,
    )
    dm_8 = Message(
        content="Squidward, how many are you eating? SQUUUUUIDWAAAAAARD",
        user_id = 1,
        channel_id = 12,
    )
    dm_9 = Message(
        content="Squidward, you can't eat all those patties at one time",
        user_id = 1,
        channel_id = 12,
    )
    dm_10 = Message(
        content="What's gonna happen am I gonna blow up?",
        user_id = 7,
        channel_id = 12,
    )
    dm_11 = Message(
        content="No worse! It'll go right to your thighs",
        user_id = 1,
        channel_id = 12,
    )
    dm_12 = Message(
        content="...and then you'll blow up",
        user_id = 1,
        channel_id = 12,
    )
    dm_13 = Message(
        content="💣💣💣...💥💥💥💥💥💥💥💥",
        user_id = 7,
        channel_id = 12,
    )
    dm_14 = Message(
        content="Welcome to the Salty Spitoon. How tough are you??? 💪",
        user_id = 12,
        channel_id = 8,
    )
    dm_15 = Message(
        content="how tough am i...HOW TOUGH AM I?? ",
        user_id = 1,
        channel_id = 8,
    )
    dm_16 = Message(
        content="I had a 🥣 of nails for breakfast this morning",
        user_id = 1,
        channel_id = 8,
    )
    dm_17 = Message(
        content="huhuhuyeah so??? 🤨 ",
        user_id = 12,
        channel_id = 8,
    )
    dm_18 = Message(
        content="without any milk...🙅‍♀️🥛",
        user_id = 1,
        channel_id = 8,
    )
    dm_19 = Message(
        content="😨😨😨 right this way, sir",
        user_id = 12,
        channel_id = 8,
    )
    dm_20 = Message(
        content="Welcome to the Salty Spitoon. How tough are you??? 💪",
        user_id = 12,
        channel_id = 8,
    )
    dm_21 = Message(
        content="how tough am i...HOW TOUGH AM I?? ",
        user_id = 8,
        channel_id = 8,
    )
    dm_22 = Message(
        content="😡😡😡 🫴 💖   ⬆️ 🔄 ⬇️ 💔 ",
        user_id = 8,
        channel_id = 8,
    )
    dm_23 = Message(
        content="🤕🤕😭😭 right this way, sir",
        user_id = 12,
        channel_id = 8,
    )
    dm_24 = Message(
        content="Excuse me sir, but I do believe you've dropped your wallet",
        user_id = 11,
        channel_id = 8,
    )
    dm_25 = Message(
        content="Doesn't look familiar to me...",
        user_id = 1,
        channel_id = 8,
    )
    dm_26 = Message(
        content="what?🧐 I just saw you drop it... here 🫲",
        user_id = 11,
        channel_id = 8,
    )
    dm_27 = Message(
        content="Nope it's not mine...🗿",
        user_id = 1,
        channel_id = 8,
    )
    dm_28 = Message(
        content="It is yours, I'm trying to be a good person and return it to you 😇",
        user_id = 11,
        channel_id = 8,
    )
    dm_29 = Message(
        content="return what to who",
        user_id = 1,
        channel_id = 8,
    )
    dm_30 = Message(
        content="😑",
        user_id = 11,
        channel_id = 8,
    )
    dm_31 = Message(
        content="Aren't you Patrick Star?",
        user_id = 11,
        channel_id = 8,
    )
    dm_32 = Message(
        content="yep",
        user_id = 1,
        channel_id = 8,
    )
    dm_33 = Message(
        content="And this is your Id?",
        user_id = 11,
        channel_id = 8,
    )
    dm_34 = Message(
        content="yep",
        user_id = 1,
        channel_id = 8,
    )
    dm_35 = Message(
        content="I found this Id in this wallet. And if that's the case than this must be YOUR Wallet 😠😤",
        user_id = 11,
        channel_id = 8,
    )
    dm_36 = Message(
        content="that makes sense to me",
        user_id = 1,
        channel_id = 8,
    )
    dm_37 = Message(
        content="then take it...",
        user_id = 11,
        channel_id = 8,
    )
    dm_38 = Message(
        content="it's not my wallet",
        user_id = 1,
        channel_id = 8,
    )
    dm_39 = Message(
        content="💀💀💀💀💀💀",
        user_id = 11,
        channel_id = 8,
    )


    
   

    db.session.add(dm_1)
    db.session.add(dm_2)
    db.session.add(dm_3)
    db.session.add(dm_4)
    db.session.add(dm_5)
    db.session.add(dm_6)
    db.session.add(dm_7)
    db.session.add(dm_8)
    db.session.add(dm_9)
    db.session.add(dm_10)
    db.session.add(dm_11)
    db.session.add(dm_12)
    db.session.add(dm_13)
    db.session.add(dm_14)
    db.session.add(dm_15)
    db.session.add(dm_16)
    db.session.add(dm_17)
    db.session.add(dm_18)
    db.session.add(dm_19)
    db.session.add(dm_20)
    db.session.add(dm_21)
    db.session.add(dm_22)
    db.session.add(dm_23)
    db.session.add(dm_24)
    db.session.add(dm_25)
    db.session.add(dm_26)
    db.session.add(dm_27)
    db.session.add(dm_28)
    db.session.add(dm_29)
    db.session.add(dm_30)
    db.session.add(dm_31)
    db.session.add(dm_32)
    db.session.add(dm_33)
    db.session.add(dm_34)
    db.session.add(dm_35)
    db.session.add(dm_36)
    db.session.add(dm_37)
    db.session.add(dm_38)
    db.session.add(dm_39)


    

    db.session.commit()


def undo_messages():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM messages"))

    db.session.commit()
