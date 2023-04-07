from app.models import db, Group, GroupMember, environment, SCHEMA
from sqlalchemy.sql import text

def seed_groups():
    group1 = Group()
    group2 = Group()

    db.session.add(group1)
    db.session.add(group2)
    
    db.session.commit()


def seed_group_members():
    group_member1 = GroupMember(
        group_id=1,
        user_id=1
    )
    group_member2 = GroupMember(
        group_id=1,
        user_id=2
    )
    group_member3 = GroupMember(
        group_id=2,
        user_id=1
    )
    group_member4 = GroupMember(
        group_id=2,
        user_id=2
    )
    group_member5 = GroupMember(
        group_id=2,
        user_id=3
    )

    db.session.add(group_member1)
    db.session.add(group_member2)
    db.session.add(group_member3)
    db.session.add(group_member4)
    db.session.add(group_member5)

    db.session.commit()


def undo_groups():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.workspaces RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM groups"))

    db.session.commit()


def undo_group_members():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.workspaces RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM group_members"))

    db.session.commit()
