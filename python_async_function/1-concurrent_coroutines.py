#!/usr/bin/env python3
""" 1-concurrent_coroutines.py """

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """

    Args:
        n (int): number of time wait_number will be call
        max_delay (int): max_delay to wait. Defaults to 10.

    Returns:
        List[float]: list of all delays in ascending order
    """
    delays = []
    for delay in (wait_random(max_delay) for _ in range(n)):
        delays.append(await delay)
    return delays
