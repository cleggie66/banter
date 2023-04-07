from app.models import db, DirectMessage, GroupMessage, environment, SCHEMA
from sqlalchemy.sql import text

def seed_direct_messages():
    dm_1 = DirectMessage(
        message="I would say that is a good, but not great answer.",
        sender_id = 1,
        recipient_id= 2,
    )
    dm_2 = DirectMessage(
        message="I would say that is a good, but not great answer.",
        sender_id = 2,
        recipient_id= 1,
    )
   
    db.session.add(dm_1)
    db.session.add(dm_2)
    db.session.commit()


def undo_direct_messages():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.direct_messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM direct_messages"))

    db.session.commit()


def seed_group_messages():
    group_messages_1 = GroupMessage(
        message="Howdy", sender_id=1, group_id=1
    )
    group_messages_2 = GroupMessage(
        message="Mornin", sender_id=1, group_id=1
    )
    group_messages_3 = GroupMessage(
        message="Hola", sender_id=2, group_id=2
    )
    group_messages_4 = GroupMessage(
        message="Mahalo", sender_id=3, group_id=2
    )

    db.session.add(group_messages_1)
    db.session.add(group_messages_2)
    db.session.add(group_messages_3)
    db.session.add(group_messages_4)
    
    db.session.commit()


def undo_group_messages():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.group_messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM group_messages"))

    db.session.commit()
