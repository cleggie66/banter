from flask.cli import AppGroup
from .users import seed_users, undo_users
from .channels import seed_channels, seed_channel_users, undo_channels, undo_channel_users
from .groups import seed_groups, seed_group_members, undo_groups, undo_group_members
from .messages import seed_direct_messages, seed_group_messages, undo_direct_messages, undo_group_messages
from .workspaces import seed_workspaces, seed_workspace_users, undo_workspaces, undo_workspace_users

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
        undo_users()
        undo_channels()
        undo_channel_users()
        undo_groups()
        undo_group_members()
        undo_direct_messages()
        undo_group_messages()
        undo_workspaces()
        undo_workspace_users()
    seed_users()
    seed_channels()
    seed_channel_users()
    seed_groups()
    seed_group_members()
    seed_direct_messages()
    seed_group_messages()
    seed_workspaces()
    seed_workspace_users()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_channels()
    undo_channel_users()
    undo_groups()
    undo_group_members()
    undo_direct_messages()
    undo_group_messages()
    undo_workspaces()
    undo_workspace_users()
    # Add other undo functions here
