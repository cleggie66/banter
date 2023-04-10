from flask import Blueprint
from app.models import Message

message_routes = Blueprint('messages', __name__)


# FULL CRUD
