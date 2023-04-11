from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError


class MessageForm(FlaskForm):
    content = StringField('Compose message...', validators=[DataRequired()])
