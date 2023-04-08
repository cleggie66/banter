from .db import db, environment, SCHEMA, add_prefix_for_prod


class Workspace(db.Model):
    __tablename__ = 'workspaces'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String(50), nullable=False)
    icon = db.Column(db.String(250))

    workspace_owner = db.relationship("User", back_populates="owner_of_workspaces")







    # ! JOIN TABLE 
    workspace_members = db.Table(
    "workspace_members",
    db.Column(
        "user_id", 
        db.Integer, 
        db.ForeignKey("users.id"), 
        primary_key=True
    ),
    db.Column(
        "workspace_id", 
        db.Integer, 
        db.ForeignKey("workspaces.id"), 
        primary_key=True
    )
)
