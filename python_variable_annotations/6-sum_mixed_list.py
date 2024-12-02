#!/usr/bin/env python3

"""
function that take a list of integers and float and return their sum
"""

from typing import List, Union

"""
import module typing
"""


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """

    Args:
        mxd_lst (List[Union[int, float]]): list of int and float

    Returns:
        float: sum of the list elements
    """
    return sum(mxd_lst)
