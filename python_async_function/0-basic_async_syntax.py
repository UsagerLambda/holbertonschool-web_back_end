#!/usr/bin/env python3
""" 0-basic_async_syntax.py """

import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """

    Args:
        max_delay (int, optional): max_delay to wait. Defaults to 10.

    Returns:
        float: the delay in float
    """
    # Génère un délai aléatoire (float) entre 0 et max_delay inclus
    delay = random.uniform(0, max_delay)
    # Suspend l'exécution de la coroutine pour le délai généré,
    # sans bloquer les autres tâches asynchrones
    await asyncio.sleep(delay)
    return delay
