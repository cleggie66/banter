from app.models import db, DirectMessage, environment, SCHEMA
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
