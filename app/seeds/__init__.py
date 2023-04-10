from flask.cli import AppGroup
from .users import seed_users, undo_users
from .channels import seed_channels, undo_channels
from .messages import seed_messages, undo_messages
from .workspaces import seed_workspaces, undo_workspaces

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        # ! I'm unsure here if we should just run truncate or undo???
        # db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.channels RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.workspaces RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.messages RESTART IDENTITY CASCADE;")
        # db.session.commit()

        undo_users()
        undo_channels()
        undo_messages()
        undo_workspaces()
    seed_users()
    seed_channels()
    seed_messages()
    seed_workspaces()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_channels()
    undo_messages()
    undo_workspaces()
    # Add other undo functions here
