from app import APP
from config import AppConfig

if __name__ == '__main__':
    APP.run(host=AppConfig.HOST, port=AppConfig.PORT)
