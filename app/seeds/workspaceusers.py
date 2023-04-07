from app.models import db, WorkspaceUser, environment, SCHEMA
from sqlalchemy.sql import text

def seed_workspace_users():
    demo = User.query.filter_by(username='Demo').first()
    marnie = User.query.filter_by(username='marnie').first()
    bobbie = User.query.filter_by(username='bobbie').first()
    workspace1 = Workspace.query.filter_by(name='Workspace 1').first()
    workspace2 = Workspace.query.filter_by(name='Workspace 2').first()

    workspace_user1 = WorkspaceUser(user_id=demo.id, workspace_id=workspace1.id)
    workspace_user2 = WorkspaceUser(user_id=marnie.id, workspace_id=workspace1.id)
    workspace_user3 = WorkspaceUser(user_id=bobbie.id, workspace_id=workspace2.id)

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