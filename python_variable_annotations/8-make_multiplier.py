#!/usr/bin/env python3

"""
Fonction that take a float argument and return it multiplie by himself
"""

from typing import Callable

"""
module
"""


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """

    Args:
        multiplier (float): float

    Returns:
        Callable[[float], float]: float * float
    """
    return lambda x: multiplier * multiplier
