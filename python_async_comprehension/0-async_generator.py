#!/usr/bin/env python3
""" 0-async_generator.py """

import random
import asyncio


async def async_generator():
    """
    Asynchronous generator that yields random float numbers.

    This coroutine generates 10 random float numbers between 0 and 10,
    with a 1-second delay between each generation.

    Yields:
        float: A random float number between 0 and 10
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
