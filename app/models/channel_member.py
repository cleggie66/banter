from .db import db, environment, SCHEMA, add_prefix_for_prod


channel_members = db.Table(
    "channel_members",
    db.Model.metadata,
    db.Column(
        "user_id", 
        db.Integer, 
        db.ForeignKey(add_prefix_for_prod("users.id")), 
        primary_key=True,
        nullable=False
    ),
    db.Column(
        "channel_id", 
        db.Integer, 
        db.ForeignKey(add_prefix_for_prod("channels.id")), 
        primary_key=True,
        nullable=False

    )
)
if environment == "production":
    channel_members.schema = SCHEMA
