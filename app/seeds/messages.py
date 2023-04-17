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
        channel_id = 11,
    )
    dm_25 = Message(
        content="Doesn't look familiar to me...",
        user_id = 1,
        channel_id = 11,
    )
    dm_26 = Message(
        content="what?🧐 I just saw you drop it... here 🫲",
        user_id = 11,
        channel_id = 11,
    )
    dm_27 = Message(
        content="Nope it's not mine...🗿",
        user_id = 1,
        channel_id = 11,
    )
    dm_28 = Message(
        content="It is yours, I'm trying to be a good person and return it to you 😇",
        user_id = 11,
        channel_id = 11,
    )
    dm_29 = Message(
        content="return what to who",
        user_id = 1,
        channel_id = 11,
    )
    dm_30 = Message(
        content="😑",
        user_id = 11,
        channel_id = 11,
    )
    dm_31 = Message(
        content="Aren't you Patrick Star?",
        user_id = 11,
        channel_id = 11,
    )
    dm_32 = Message(
        content="yep",
        user_id = 1,
        channel_id = 11,
    )
    dm_33 = Message(
        content="And this is your Id?",
        user_id = 11,
        channel_id = 11,
    )
    dm_34 = Message(
        content="yep",
        user_id = 1,
        channel_id = 11,
    )
    dm_35 = Message(
        content="I found this Id in this wallet. And if that's the case than this must be YOUR Wallet 😠😤",
        user_id = 11,
        channel_id = 11,
    )
    dm_36 = Message(
        content="that makes sense to me",
        user_id = 1,
        channel_id = 11,
    )
    dm_37 = Message(
        content="then take it...",
        user_id = 11,
        channel_id = 11,
    )
    dm_38 = Message(
        content="it's not my wallet",
        user_id = 1,
        channel_id = 11,
    )
    dm_39 = Message(
        content="💀💀💀💀💀💀",
        user_id = 11,
        channel_id = 11,
    )
    dm_40 = Message(
        content="Don't you have to be stupid somewhere else? 🤨",
        user_id = 8,
        channel_id = 13,
    )
    dm_41 = Message(
        content="Not until 4",
        user_id = 1,
        channel_id = 13,
    )
    dm_42 = Message(
        content="I guess we should open these cans of permanent paint now 😅",
        user_id = 4,
        channel_id = 10,
    )
    dm_43 = Message(
        content="careful, spongebob. Careful Spongebob, CAREFULE SPONGEBOB SPONNGEBOOOOOOB",
        user_id = 5,
        channel_id = 10,
    )
    dm_44 = Message(
        content="Patrick, the lids already off... ",
        user_id = 4,
        channel_id = 10,
    )
    dm_45 = Message(
        content="We did it! We painted the whole house without getting a single drop of FLIPPING FLAPJACKS WHATS THAT 😱😱😱",
        user_id = 4,
        channel_id = 10,
    )
    dm_46 = Message(
        content="That's not just a dollar... it's Mr.Krabs most prized possesion. AND WE GOT PAINT ON IT",
        user_id = 4,
        channel_id = 10,
    )
    dm_46 = Message(
        content="FORGET what Mr.Krabs said every paint comes off with something",
        user_id = 5,
        channel_id = 10,
    )
    dm_47 = Message(
        content="🚰🚰🚰🌊🌊👊👊👊👊🤲🤲🤲🤲",
        user_id = 4,
        channel_id = 10,
    )
    dm_48 = Message(
        content="wait spongebob... we Are Not Cavemen... We have technology!",
        user_id = 5,
        channel_id = 10,
    )
    dm_49 = Message(
        content="🖥️ ⬆️ ⏬ ⬆️ ⏬ ⬆️ ⏬ ⬆️ ⏬ 💥",
        user_id = 5,
        channel_id = 10,
    )
    dm_50 = Message(
        content="You may be an open book, but I'm a bit more complicated than that. ",
        user_id = 5,
        channel_id = 14,
    )
    dm_51 = Message(
        content="The inner machinations of my mind are an enigma 💭💭💭🥛⬇️ ",
        user_id = 5,
        channel_id = 14,
    )
    dm_52 = Message(
        content="Let me guess, Tiny. A small salad...😑 ",
        user_id = 7,
        channel_id = 6,
    )
    dm_53 = Message(
        content="I'll take a double triple bossy deluxe 🍔🍔🍔, on a raft 🚣🏽‍♂️, four by four animal style 🦁🦁 , extra shingles with a shimmy and a squeeze 🧅, light axle grease 🛢️, make it cry 😭, burn it 🔥, and let it swim 🐟 ",
        user_id = 10,
        channel_id = 6,
    )
    dm_54 = Message(
        content="We serve food here, Sir. ",
        user_id = 7,
        channel_id = 6,
    )
    dm_55 = Message(
        content="Wish I was back in Texas. The ocean is no place for a squirrrellll. Wish I was in Texas the prettiest place in the woooooorlllddd.  ",
        user_id = 8,
        channel_id = 9,
    )
    dm_56 = Message(
        content="I wanna wake up in Texas. I miss those wide open skies. I miss my 20 acres bbq and peacon pieeee oooo whyyyy. When I'm so far from you Texas. All I can doooo is cryyy. ",
        user_id = 8,
        channel_id = 9,
    )
    dm_57 = Message(
        content="I can't believe she's gone... 😔 ",
        user_id = 4,
        channel_id = 9,
    )
    dm_58 = Message(
        content="What's so great about dumb old Texas anyway... ",
        user_id = 5,
        channel_id = 9,
    )
    dm_59 = Message(
        content="🚌🚌🚌💨 What'd you say",
        user_id = 8,
        channel_id = 9,
    )
    dm_60 = Message(
        content="Texas is dumb... 👉👈",
        user_id = 5,
        channel_id = 9,
    )
    dm_61 = Message(
        content="Don't you dare take the name of Texas in vain 😡 ",
        user_id = 8,
        channel_id = 9,
    )
    dm_62 = Message(
        content="You mean we can't say anything bad about dumb old Texas...  ",
        user_id = 4,
        channel_id = 9,
    )
    dm_63 = Message(
        content="Then can we say people from Texas are dumb...",
        user_id = 5,
        channel_id = 9,
    )
    dm_64 = Message(
        content="NO, you can't say nothing about Texas! 😡 ",
        user_id = 8,
        channel_id = 9,
    )
    dm_65 = Message(
        content="Hey, Patrick. What am I now?🤠🤠🤠 ",
        user_id = 4,
        channel_id = 9,
    )
    dm_66 = Message(
        content="uhhhhhhhhhhh stupid",
        user_id = 5,
        channel_id = 9,
    )
    dm_67 = Message(
        content="nooooooo, I'm Texas!!!",
        user_id = 4,
        channel_id = 9,
    )
    dm_68 = Message(
        content="WHATS THE DIFFERENCE 💀💀💀💀💀 ",
        user_id = 5,
        channel_id = 9,
    )
    dm_69 = Message(
        content="🤬🤬🤬🤬 💣💣💣💣💣💣💣💣💣💣💣",
        user_id = 8,
        channel_id = 9,
    )
    dm_70 = Message(
        content="By living like larry",
        user_id = 9,
        channel_id = 7,
    )
    dm_71 = Message(
        content="by living like larry...",
        user_id = 4,
        channel_id = 7,
    )
    dm_72 = Message(
        content="Living Like Larry...",
        user_id = 5,
        channel_id = 7,
    )
    dm_73 = Message(
        content="LIVING LIKE LARRY 🙌🙌🙌🙌",
        user_id = 9,
        channel_id = 7,
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
    db.session.add(dm_40)
    db.session.add(dm_41)
    db.session.add(dm_42)
    db.session.add(dm_43)
    db.session.add(dm_44)
    db.session.add(dm_45)
    db.session.add(dm_46)
    db.session.add(dm_47)
    db.session.add(dm_48)
    db.session.add(dm_49)
    db.session.add(dm_50)
    db.session.add(dm_51)
    db.session.add(dm_52)
    db.session.add(dm_53)
    db.session.add(dm_54)
    db.session.add(dm_55)
    db.session.add(dm_56)
    db.session.add(dm_57)
    db.session.add(dm_58)
    db.session.add(dm_59)
    db.session.add(dm_60)
    db.session.add(dm_61)
    db.session.add(dm_62)
    db.session.add(dm_63)
    db.session.add(dm_64)
    db.session.add(dm_65)
    db.session.add(dm_66)
    db.session.add(dm_67)
    db.session.add(dm_68)
    db.session.add(dm_69)
    db.session.add(dm_70)
    db.session.add(dm_71)
    db.session.add(dm_72)
    db.session.add(dm_73)










    

    db.session.commit()



def undo_messages():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM messages"))

    db.session.commit()
