#!/usr/bin/env python3
""" 10-update_topics.py """


def update_topics(mongo_collection, name, topics):
    """
    update topics of school document based on the name

    Args:
        mongo_collection (_type_): collection
        name (_type_): documents to find
        topics (_type_): dict to update
    """
    mongo_collection.update_one({"name": name}, {"$set": {"topics": topics}})
