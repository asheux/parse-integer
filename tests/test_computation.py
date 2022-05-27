"""
imports
"""
from werkzeug.test import Client
from app import create_app
from app.settings import *

class TestComputation:
    """
    """
    def test_computes_for_5_and_7(self):
        app = create_app(TESTING)
        cliect = Client(app)
        res = cliect.get('http://127.0.0.1:5000/api/v1/computations/35')
        data = res.get_data(as_text=True)
        assert res.status_code == 200
        assert data == '{"result":"LR"}\n'

    def test_computes_for_5(self):
        app = create_app(TESTING)
        cliect = Client(app)
        res = cliect.get('http://127.0.0.1:5000/api/v1/computations/75')
        data = res.get_data(as_text=True)
        assert res.status_code == 200
        assert data == '{"result":"L"}\n'

    def test_computes_for_7(self):
        app = create_app(TESTING)
        cliect = Client(app)
        res = cliect.get('http://127.0.0.1:5000/api/v1/computations/49')
        data = res.get_data(as_text=True)
        assert res.status_code == 200
        assert data == '{"result":"R"}\n'

    def test_computes_for_nune(self):
        app = create_app(TESTING)
        cliect = Client(app)
        res = cliect.get('http://127.0.0.1:5000/api/v1/computations/73')
        data = res.get_data(as_text=True)
        assert res.status_code == 200
        assert data == '{"result":"73"}\n'

