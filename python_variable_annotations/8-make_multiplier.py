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
    Callable[[args], args] c'est une manière compliqué de dire;
    "fonction qui prend un type d'argument et retourne un autre"
    NUL
    Args:
        multiplier (float): float

    Returns:
        Callable[[float], float]: float * float
    """
    return lambda x: multiplier * multiplier
