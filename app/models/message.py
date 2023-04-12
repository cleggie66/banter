from .db import db, environment, SCHEMA, add_prefix_for_prod


class Message(db.Model):
    __tablename__ = 'messages'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"), nullable=False)
    channel_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("channels.id")), nullable=False)

    # * Relationships 💚
    in_channel = db.relationship("Channel", back_populates="channel_messages")
    message_owner = db.relationship("User", back_populates="user_messages")

    def to_dict_simple(self):
        return {
            "id": self.id,
            "content": self.content,
            "user_id": self.user_id,
            "channel_id": self.channel_id,
        }
    
    def to_dict(self):
        return {
            "id": self.id,
            "content": self.content,
            "user_id": self.user_id,
            "channel_id": self.channel_id,
            "channel": self.in_channel.to_dict_simple(),
            "message_owner": self.message_owner.to_dict_simple(),
        }
