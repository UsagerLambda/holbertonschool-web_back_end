#!/usr/bin/env python3

"""
Function that take a string and an int OR float as arguments and return a tuple
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """

    Args:
        k (str): string
        v (Union[int, float]): arguments to return as square

    Returns:
        Tuple[str, float]: tuple with str and the square of v
    """
    return k, (v ** 2)
