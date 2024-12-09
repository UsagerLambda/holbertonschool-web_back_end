#!/usr/bin/env python3
""" 0-simple_helper_function.py """


def index_range(page: int, page_size: int) -> tuple:
    """
    Function that return the starting index and the ending index

    Args:
        page (int): index number page
        page_size (int): number of elements on the page

    Returns:
        tuple: start_index (first element index),
                end_index (last element index)
    """
    # exemple :(2−1)×10=10 (1er index of page 2 is 10)
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index
