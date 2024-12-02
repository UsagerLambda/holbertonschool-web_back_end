#!/usr/bin/env python3

"""
Function that take a list of floats as arguments
and return their sum as a float
"""

from typing import List

"""
module
"""


def sum_list(input_list: List[float]) -> float:
    """

    Args:
        input_list (float): list of floats

    Returns:
        float: sum of the float in the list
    """
    return sum(input_list)
