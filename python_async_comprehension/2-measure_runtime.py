#!/usr/bin/env python3
"""
This module measures the execution time of running an asynchronous
comprehension multiple times concurrently.
"""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Measures the total runtime of executing async_comprehension multiple times.

    This function uses asyncio.gather() to run async_comprehension concurrently
    and measures the total execution time using time.time().

    Returns:
        float: The total runtime of executing the async comprehension,
               measured in seconds.
    """
    start = time.time()
    await asyncio.gather(async_comprehension())
    end = time.time()
    return end - start
