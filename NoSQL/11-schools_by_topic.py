#!/usr/bin/env python3
""" 11-schools_by_topics.py """


def schools_by_topic(mongo_collection, topic):
    """
    return the list of school with specific topic

    Args:
        mongo_collection (_type_): collection
        topic (_type_): topic to find

    Returns:
        _type_: list of school that match the topic
    """
    return list(mongo_collection.find({"topic": topic}))
