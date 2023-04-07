class Workspace(db.Model):
    __tablename__ = 'workspaces'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    icon = db.Column(db.String(250))

class WorkspaceUser(db.Model):
    __tablename__ = 'workspace_users'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('users.id'))
    workspace_id = db.Column(db.Integer, ForeignKey('workspaces.id'))
