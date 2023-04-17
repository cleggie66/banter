from app.models import db, Message, environment, SCHEMA
from sqlalchemy.sql import text

def seed_messages():
    dm_1 = Message(
        content="Banter is hands down the greatest group project i have ever laid my mortal eyes on",
        user_id = 8,
        channel_id = 5,
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

    db.session.add(dm_1)
    db.session.add(dm_2)
    db.session.add(dm_3)
    db.session.add(dm_4)
    db.session.add(dm_5)

    db.session.commit()


def undo_messages():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM messages"))

    db.session.commit()
