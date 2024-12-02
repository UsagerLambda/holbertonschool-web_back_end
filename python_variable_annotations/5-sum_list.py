#!/usr/bin/env python3

"""
Function that take a list of floats as arguments
and return their sum as a float
"""


def sum_list(input_list: float) -> float:
    """

    Args:
        input_list (float): list of floats

    Returns:
        float: sum of the float in the list
    """
    result = 0
    for float in input_list:
        result += float
    return result
