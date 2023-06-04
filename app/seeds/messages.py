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
    dm_74 = Message(
        content="Okay, Jack. The battery charge has been terminated on the battery B.",
        user_id = 14,
        channel_id = 15,
    )
    dm_75 = Message(
        user_id = 17,
        content="Roger. We see it, Jack. And we got a reading of minus 2 degrees on the docking index. We'd like to know it that's 2.0 precise or if it's 2.1 or 1.9.",
        channel_id = 15,
    )
    dm_76 = Message(
        user_id = 14,
        content="No. It's a minus 2.0 precisely.",
        channel_id = 15,
    )
    dm_77 = Message(
        user_id = 17,
        content="Thank you.",
        channel_id = 15,
    )
    dm_78 = Message(
        user_id = 17,
        content="13, we've got one more item for you, when you get a chance. We'd like you to stir up your cryo tanks. In addition, I have shaft and trunnion - -",
        channel_id = 15,
    )
    dm_79 = Message(
        user_id = 14,
        content="Okay.",
        channel_id = 15,
    )
    dm_80 = Message(
        user_id = 17,
        content="for looking at the Comet Bennett, if you need it.",
        channel_id = 15,
    )
    dm_81 = Message(
        user_id = 14,
        content="Okay. Stand by.",
        channel_id = 15,
    )   
    dm_82 = Message(
        user_id = 15,
        content="Okay, Houston - -",
        channel_id = 15,
    )
    dm_83 = Message(
        user_id = 13,
        content="I believe we've had a problem here.",
        channel_id = 15,
    )
    dm_84 = Message(
        user_id = 17,
        content="This is Houston. Say again, please.",
        channel_id = 15,
    )
    dm_85 = Message(
        user_id = 13,
        content="Houston, we've had a problem. We've had a MAIN B BUS UNDERVOLT.",
        channel_id = 15,
    )
    dm_86 = Message(
        user_id = 17,
        content="Roger. MAIN B UNDERVOLT.",
        channel_id = 15,
    )
    dm_87 = Message(
        user_id = 17,
        content="Okay, stand by, 13. We're looking at it.",
        channel_id = 15,
    )
    dm_88 = Message(
        user_id = 13,
        content="The clock is running.",
        channel_id=16,
    )
    dm_89 = Message(
        user_id = 14,
        content="Okay. P11, Jim.",
        channel_id=16,
    )
    dm_90 = Message(
        user_id = 13,
        content="Yaw program.",
        channel_id=16,
    )
    dm_91 = Message(
        user_id = 14,
        content="Clear the tower.",
        channel_id=16,
    )
    dm_92 = Message(
        user_id = 13,
        content="Yaw complete. Roll program.",
        channel_id=16,
    )
    dm_93 = Message(
        user_id = 16,
        content="Houston, Roger. Roll.",
        channel_id=16,
    )
    dm_94 = Message(
        user_id = 16,
        content="13, Houston. GO at 30 seconds.",
        channel_id=16,
    )
    dm_95 = Message(
        user_id = 13,
        content="Roll complete, and we are pitching.",
        channel_id=16,
    )
    dm_96 = Message(
        user_id = 16,
        content="Roger that. Stand by for mode I Bravo.",
        channel_id=16,
    )
    dm_97 = Message(
        user_id = 16,
        content="MARK.",
        channel_id=16,
    )
    dm_98 = Message(
        user_id = 16,
        content="I Bravo.",
        channel_id=16,
    )
    dm_99 = Message(
        user_id = 14,
        content="I Bravo.",
        channel_id=16,
    )
    dm_100 = Message(
        user_id = 13,
        content="RCS COMMAND.",
        channel_id=16,
    )
    dm_101 = Message(
        user_id = 16,
        content="13, Houston. GO at 1. We show the cabin relieving.",
        channel_id=16,
    )
    dm_102 = Message(
        user_id = 13,
        content="13; Roger.",
        channel_id=16,
    )
    dm_103 = Message(
        user_id = 17,
        content="13, Houston. Stand by for mode I Charlie.",
        channel_id=17,
    )
    dm_104 = Message(
        user_id = 17,
        content="MARK.",
        channel_id=17,
    )
    dm_105 = Message(
        user_id = 17,
        content="You're I Charlie.",
        channel_id=17,
    )
    dm_106 = Message(
        user_id = 13,
        content="MARK.",
        channel_id=17,
    )
    dm_107 = Message(
        user_id = 13,
        content="I Charlie.",
        channel_id=17,
    )
    dm_108 = Message(
        user_id = 17,
        content="And, 13, you are GO for staging.",
        channel_id=17,
    )
    dm_109 = Message(
        user_id = 13,
        content="GO for staging. Roger. We're EDS MANUAL.",
        channel_id=17,
    )
    dm_110 = Message(
        user_id = 17,
        content="Copy that.",
        channel_id=17,
    )
    dm_111 = Message(
        user_id = 13,
        content="Inboard.",
        channel_id=17,
    )
    dm_112 = Message(
        user_id = 17,
        content="We confirm inboard out, 13. You're looking good.",
        channel_id=17,
    )
    dm_113 = Message(
        user_id = 13,
        content="Roger.",
        channel_id=17,
    )
    dm_114 = Message(
        user_id = 13,
        content="S-II ignition.",
        channel_id=17,
    )
    dm_115 = Message(
        user_id = 17,
        content="Roger.",
        channel_id=17,
    )
    dm_116 = Message(
        user_id = 17,
        content="13, Houston. Trajectory is good; thrust is good.",
        channel_id=17,
    )
    dm_117 = Message(
        user_id = 13,
        content="Roger.",
        channel_id=17,
    )


    dm_118 = Message(
        user_id = 20,
        content="What's up? You hear from Tony?",
        channel_id=20,
    )
    dm_119 = Message(
        user_id = 19,
        content="I just talked to Kelvin, Calvin, whatever his name is. That redneck from North Carolina. He got a call from the Bureau of Alcohol and Tobacco. Some bodegas in Newark been selling cigarettes without the tax stamps on them.",
        channel_id=20,
    )
    dm_120 = Message(
        user_id = 20,
        content="They were suppose to stamp it themselves.",
        channel_id=20,
    )
    dm_121 = Message(
        user_id = 19,
        content="The Feds are all over it. I don't have enough on my mind?",
        channel_id=20,
    )
    dm_122 = Message(
        user_id = 20,
        content="Any idea on how you're going to handle it?",
        channel_id=20,
    )
    dm_123 = Message(
        user_id = 19,
        content="Handle what?",
        channel_id=20,
    )
    dm_124 = Message(
        user_id = 20,
        content="Our cousin. You know Phil and John?",
        channel_id=20,
    )
    dm_125 = Message(
        user_id = 19,
        content="I don't know. I got to think about it. From now on Paulie supervises the entire cigarette run. You split everything down the middle with him.",
        channel_id=20,
    )
    dm_126 = Message(
        user_id = 20,
        content="What?",
        channel_id=20,
    )
    dm_127 = Message(
        user_id = 19,
        content="You heard me.",
        channel_id=20,
    )
    dm_128 = Message(
        user_id = 20,
        content="I got a wedding to pay for.",
        channel_id=20,
    )
    dm_129 = Message(
        user_id = 19,
        content="Well, if I were you I'd cut out the open bar.",
        channel_id=20,
    )


    dm_130 = Message(
        user_id = 21,
        content="Alright just relax, focus on your breathing, slowly",
        channel_id=18,
    )
    dm_131 = Message(
        user_id = 19,
        content="It's not that I just...",
        channel_id=18,
    )
    dm_132 = Message(
        user_id = 21,
        content="No, please focus. I've got my medical bag in case",
        channel_id=18,
    )
    dm_133 = Message(
        user_id = 19,
        content="I had a fight with my mother and had a panic attack",
        channel_id=18,
    )
    dm_134 = Message(
        user_id = 21,
        content="Ok forget that for now",
        channel_id=18,
    )
    dm_135 = Message(
        user_id = 19,
        content="Carmella was supposed to come over with some yarn for booties she was making for Meadow. She was late, oh why go into it?",
        channel_id=18,
    )
    dm_136 = Message(
        user_id = 21,
        content="Close your eyes, focus on your breathing",
        channel_id=18,
    )
    dm_137 = Message(
        user_id = 19,
        content="She was carrying on and I say to her 'Carmella loves you, you've got to understand she's got a three month old,' she kept going on and I started screaming at her so I left. I went over to the car then boom and cut my head open",
        channel_id=18,
    )
    dm_138 = Message(
        user_id = 21,
        content="And your cousin doesn't know this?",
        channel_id=18,
    )
    dm_139 = Message(
        user_id = 19,
        content="No I lied. What am I going to tell them? I had a fight with my mother and fainted? That's why I missed the job.",
        channel_id=18,
    )
    dm_140 = Message(
        user_id = 21,
        content="That's a lot to get off your chest",
        channel_id=18,
    )
    

    dm_141 = Message(
        user_id = 19,
        content="Been wanting to talk to you.",
        channel_id=19,
    )
    dm_142 = Message(
        user_id = 20,
        content="Yeah, been wanting to talk to you too.",
        channel_id=19,
    )
    dm_143 = Message(
        user_id = 19,
        content="I'll go first. I gotta make it my number one priority to limit my exposure to potentially damaging conversations and wiretaps, stuff like that.",
        channel_id=19,
    )
    dm_144 = Message(
        user_id = 20,
        content="Sure, guy in your position.",
        channel_id=19,
    )
    dm_145 = Message(
        user_id = 19,
        content="So, over the next couple of years, more and more, I'm gonna be giving my orders through you, and then finally only through you.",
        channel_id=19,
    )
    dm_146 = Message(
        user_id = 20,
        content="And what about Sil? You got that with him and Paulie.",
        channel_id=19,
    )
    dm_147 = Message(
        user_id = 19,
        content="Those other guys, Sil, Paulie... one thing they're not: they're not my blood. You hear what I'm saying to you? It's a matter of trust.",
        channel_id=19,
    )
    dm_148 = Message(
        user_id = 20,
        content="That's very wise.",
        channel_id=19,
    )
    dm_149 = Message(
        user_id = 19,
        content="Sil's a good consigliere, he's gonna continue on as such, but he's no spring chicken either. On the other hand, there's no reason to be giving him an attitude either.",
        channel_id=19,
    )
    dm_150 = Message(
        user_id = 20,
        content="No, course not.",
        channel_id=19,
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
    db.session.add(dm_74)
    db.session.add(dm_75)
    db.session.add(dm_76)
    db.session.add(dm_77)
    db.session.add(dm_78)
    db.session.add(dm_79)
    db.session.add(dm_80)
    db.session.add(dm_81)
    db.session.add(dm_82)
    db.session.add(dm_83)
    db.session.add(dm_84)
    db.session.add(dm_85)
    db.session.add(dm_86)
    db.session.add(dm_87)
    db.session.add(dm_88)
    db.session.add(dm_89)
    db.session.add(dm_90)
    db.session.add(dm_91)
    db.session.add(dm_92)
    db.session.add(dm_93)
    db.session.add(dm_94)
    db.session.add(dm_95)
    db.session.add(dm_96)
    db.session.add(dm_97)
    db.session.add(dm_98)
    db.session.add(dm_99)
    db.session.add(dm_100)
    db.session.add(dm_101)
    db.session.add(dm_102)
    db.session.add(dm_103)
    db.session.add(dm_104)
    db.session.add(dm_105)
    db.session.add(dm_106)
    db.session.add(dm_107)
    db.session.add(dm_108)
    db.session.add(dm_109)
    db.session.add(dm_110)
    db.session.add(dm_111)
    db.session.add(dm_112)
    db.session.add(dm_113)
    db.session.add(dm_114)
    db.session.add(dm_115)
    db.session.add(dm_116)
    db.session.add(dm_117)
    db.session.add(dm_118)
    db.session.add(dm_119)
    db.session.add(dm_120)
    db.session.add(dm_121)
    db.session.add(dm_122)
    db.session.add(dm_123)
    db.session.add(dm_124)
    db.session.add(dm_125)
    db.session.add(dm_126)
    db.session.add(dm_127)
    db.session.add(dm_128)
    db.session.add(dm_129)
    db.session.add(dm_130)
    db.session.add(dm_131)
    db.session.add(dm_132)
    db.session.add(dm_133)
    db.session.add(dm_134)
    db.session.add(dm_135)
    db.session.add(dm_136)
    db.session.add(dm_137)
    db.session.add(dm_138)
    db.session.add(dm_139)
    db.session.add(dm_140)
    db.session.add(dm_141)
    db.session.add(dm_142)
    db.session.add(dm_143)
    db.session.add(dm_144)
    db.session.add(dm_145)
    db.session.add(dm_146)
    db.session.add(dm_147)
    db.session.add(dm_148)
    db.session.add(dm_149)
    db.session.add(dm_150)


    db.session.commit()

def undo_messages():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM messages"))
    db.session.commit()
