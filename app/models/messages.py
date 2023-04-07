from .db import db

class DirectMessage(db.Model):
    __tablename__ = 'direct_messages'

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.Text, nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    recipient_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.String(50), nullable=False) # Timestamp?


class GroupMessage(db.Model):
    __tablename__ = "group_messages"

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(255), nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False),
    channel_id = db.Column(db.Integer, db.ForeignKey("channels.id")),
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id")),
    created_at = db.Column(db.String(50), nullable=False) # Timestamp?
