from flask import (
    Flask,
    redirect,
    request,
)

from config import AppConfig


def configure_and_initialize_app():
    flask = Flask(__name__)
    flask.config.from_object(AppConfig)
    return flask


APP = configure_and_initialize_app()


@APP.route('/')
def index():
    return APP.send_static_file('index.html')
