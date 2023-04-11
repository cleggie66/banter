from .db import db, environment, SCHEMA, add_prefix_for_prod
from .channel_member import channel_members

class Channel(db.Model):
    __tablename__ = "channels"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    workspace_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("workspaces.id"), ondelete='SET NULL'))
    is_channel = db.Column(db.Boolean, default=False)

    # * Relationships 💚
    # One to Many
    channel_messages = db.relationship("Message", back_populates="message", cascade='all,delete')
    channel_in_workspace = db.relationship("Workspace", back_populates="owned_channels", cascade='all,delete')

    # Many to Many
    users_in_channels = db.relationship("User", secondary=channel_members, back_populates= 'joined_channels')

    def to_dict_simple(self):
        return {
            "id": self.id,
            "name": self.name,
            "workspace_id": self.workspace_id,
            "is_channel": self.is_channel
        }

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "workspace_id": self.workspace_id,
            "is_channel": self.is_channel,
            "channel_messages": [message.to_dict_simple() for message in self.channel_messages],
            "channel_in_workspace": self.channel_in_workspace.to_dict_simple(),
            "users_in_channels": [user.to_dict_simple() for user in self.users_in_channels]
        }

    def to_dict_no_messages(self):
        return {
            "id": self.id,
            "name": self.name,
            "workspace_id": self.workspace_id,
            "is_channel": self.is_channel,
            "users_in_channels": [user.to_dict_simple() for user in self.users_in_channels]
        }
