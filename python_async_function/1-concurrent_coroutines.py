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
    # Crée une liste de coroutines `wait_random`
    tasks = [wait_random(max_delay) for _ in range(n)]
    # attend que toutes les taches soient complétées et rassemble les résulat
    delays = await asyncio.gather(*tasks)
    # trie les items de la liste delays
    return [x for x in sorted(delays)]
