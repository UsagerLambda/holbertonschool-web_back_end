#!/usr/bin/env python3
""" 1-async_comprehension.py """

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """
    Collects values from an async generator using an async list comprehension.

    This function calls the async_generator() -
    and uses an async list comprehension
    to iterate over its values, creating a list of all generated items.

    Returns:
        list: A list containing all values yielded by the async generator.
    """
    return [i async for i in async_generator()]
