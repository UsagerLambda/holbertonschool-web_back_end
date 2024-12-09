#!/usr/bin/env python3
""" 0-simple_helper_function.py """

import csv
import math
from typing import List, Dict, Union


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


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return the content between the start index and the end index

        Args:
            page (int, optional): index start value. Defaults to 1.
            page_size (int, optional): size of a page. Defaults to 10.

        Returns:
            List[List]: content between the index start & end in dataset
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        # call fonction dataset pour récupérer le contenu du fichier DATA_FILE
        dataset = self.dataset()
        # récupère les éléments de début et de fin à récupérer
        start, end = index_range(page, page_size)
        # vérifie si la valeur de départ n'est pas > à la longueur du dataset
        if start >= len(dataset):
            return []
        return dataset[start:end]


    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        dataset = self.dataset()
        data = self.get_page(page, page_size)
        total_pages = len(dataset) / page_size

        if page + 1 < total_pages:
            next_page = page + 1
        else:
            next_page = None

        if page > 1:
            prev_page = page - 1
        else:
            prev_page = None

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': math.ceil(total_pages)
        }
