from .db import db, environment, SCHEMA, add_prefix_for_prod
from .channel_member import channel_members

class Channel(db.Model):
    __tablename__ = "channels"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    workspace_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("workspaces.id")), nullable=False)
    is_channel = db.Column(db.Boolean, default=False)

    # * Relationships 💚
    # One to Many
    channel_messages = db.relationship("Message", back_populates="message", cascade='all,delete')
    # Many to Many
    users_in_channels = db.relationship("User", secondary=channel_members, back_populates= 'joined_channels')
    
    
