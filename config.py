from os import getenv


class AppConfig:
    DEBUG = getenv('FLASK_DEBUG', 'false') == 'true'
    HOST = getenv('HOST', '0.0.0.0')
    PORT = int(getenv('PORT', 5000))
    PERMANENT_SESSION_LIFETIME = int(getenv('SESSION_TIMEOUT', 24 * 60 * 60))
    SECRET_KEY = getenv('SECRET_KEY', 'NOT_A_SECRET_KEY')
