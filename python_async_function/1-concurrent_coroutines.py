#!/usr/bin/env python3

wait_random = __import__('0-basic_async_syntax').wait_random
import asyncio
from typing import List


async def wait_n(n: int, max_delay: int) -> List[float]:
    delays = []
    for delay in (wait_random(max_delay) for _ in range(n)):
        delays.append(await delay)
    return delays
