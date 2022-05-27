"""
imports
"""

from flask_restful import Resource
from flask import jsonify

from . import api


class Computation(Resource):
    """
    Compute integers
    """
    def get(self, number):
        # instances 
        number = int(number)
        result = f'{number}'
        if number % 5:
            result = 'L'
        if number % 7:
            result = 'R'
        if (number % 5) and (number % 7):
            result = 'LR'
        return jsonify({'result': result})
        
api.add_resource(Computation, '/computations/<string:number>')
