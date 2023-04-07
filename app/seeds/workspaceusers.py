from app.models import db, WorkspaceUser, environment, SCHEMA
from sqlalchemy.sql import text

def seed_workspace_users():

    workspace_user1 = WorkspaceUser(user_id=1, workspace_id=3)
    workspace_user2 = WorkspaceUser(user_id=2, workspace_id=2)
    workspace_user3 = WorkspaceUser(user_id=3, workspace_id=1)

    db.session.add(workspace_user1)
    db.session.add(workspace_user2)
    db.session.add(workspace_user3)
    db.session.commit()


def undo_worspace_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.workspace_users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM workspace_users"))

    db session.commit()