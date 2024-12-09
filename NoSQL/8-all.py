#!/usr/bin/env python3
"""
return a list of all documents in mongo_collection,
return an empty list if no ducuments found in the collection
"""


def list_all(mongo_collection):
    return list(mongo_collection.find())
