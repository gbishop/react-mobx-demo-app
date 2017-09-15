#!/usr/bin/python3
import bottle
import random

@bottle.get('/count')
def count():
    return { 'value': random.randint(5,20) }

@bottle.get('/')
def hello():
    return 'hello world'

bottle.run(server='cgi')
