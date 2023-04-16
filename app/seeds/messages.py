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
    # dm_6 = Message(
    #     content="This group message is very pog",
    #     user_id = 1,
    #     channel_id = 6,
    # )
    # dm_7 = Message(
    #     content="Holy Guacamole!",
    #      user_id = 2,
    #     channel_id = 1,
    # )
    # dm_8 = Message(
    #     content="Just a bit of banter",
    #     user_id = 3,
    #     channel_id = 1,
    # )

    db.session.add(dm_1)
    db.session.add(dm_2)
    db.session.add(dm_3)
    db.session.add(dm_4)
    db.session.add(dm_5)
    # db.session.add(dm_6)
    # db.session.add(dm_7)
    # db.session.add(dm_8)

    db.session.commit()


def undo_messages():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM messages"))

    db.session.commit()
