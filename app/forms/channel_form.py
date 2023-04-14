from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField
from wtforms.validators import DataRequired


class ChannelForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    workspace_id = IntegerField('Workspace ID')
    is_channel= BooleanField('Channel? (T or F)')
