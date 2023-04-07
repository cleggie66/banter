from app.models import db, GroupMessage, environment, SCHEMA
from sqlalchemy.sql import text


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
            f"TRUNCATE table {SCHEMA}.workspaces RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM group_messages"))

    db.session.commit()
