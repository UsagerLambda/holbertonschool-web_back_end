#!/usr/bin/env python3
"""
This module demonstrates an asynchronous generator that produces random
float numbers with a delay between each generation.
"""

import random
import asyncio
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronous generator that yields random float numbers.

    This coroutine generates 10 random float numbers between 0 and 10,
    with a 1-second delay between each generation.

    Yields:
        float: A random float number between 0 and 10
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
