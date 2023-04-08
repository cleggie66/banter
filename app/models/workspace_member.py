from .db import db, environment, SCHEMA, add_prefix_for_prod


workspace_members = db.Table(
    "workspace_members",
    db.Model.metadata,
    db.Column(
        "user_id", 
        db.Integer, 
        db.ForeignKey(add_prefix_for_prod("users.id")), 
        primary_key=True,
        nullable=False
    ),
    db.Column(
        "workspace_id", 
        db.Integer, 
        db.ForeignKey(add_prefix_for_prod("workspaces.id")), 
        primary_key=True,
        nullable=False

    )
)
if environment == "production":
    workspace_members.schema = SCHEMA
