class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

class DirectMessage(db.Model):
    __tablename__ = 'direct_messages'

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.Text, nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    recipient_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.String(50), nullable=False) # Timestamp?


class Channel(db.Model):
    __tablename__ = "channels"

    id = db.Column(db.Integer, primary_key=True)
    channel_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)


class ChannelMember(db.Model):
    __tablename__ = "channel_members"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    channel_id = db.Column(db.Integer, db.ForeignKey("channels.id"), nullable=False)



class GroupMessage(db.Model):
    __tablename__ = "group_messages"

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(255), nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False),
    channel_id = db.Column(db.Integer, db.ForeignKey("channels.id")),
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id")),
    created_at = db.Column(db.String(50), nullable=False) # Timestamp?



class Group(db.Model):
    __tablename__ = "groups"

    id = db.Column(db.Integer, primary_key=True)


class GroupDmMember(db.Model):
    __tablename__ = "group_dm_members"

    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)


class GroupDirectMessage(db.Model):
    __tablename__ = "group_direct_messages"

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(255), nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"), nullable=False)
    created_at = db.Column(db.String(50), nullable=False) # Timestamp?


class GroupDirectMessageReaction(db.Model):
    __tablename__ = "group_direct_message_reactions"

    id = db.Column(db.Integer, primary_key=True)
    reaction_code = db.Column(db.Integer, nullable=False)
    reaction_name = db.Column(db.String(50), nullable=False)
    message_id = db.Column(db.Integer, db.ForeignKey("channel_messages.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
