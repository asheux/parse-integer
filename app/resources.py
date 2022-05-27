"""
imports
"""

from flask_restful import Resource
from flask import jsonify

from . import api


class Computation(Resource):
    """
    Computations
    """
    def get(self):
        # instances 
        pass

api.add_resource(GitProfile, '/computations/')
