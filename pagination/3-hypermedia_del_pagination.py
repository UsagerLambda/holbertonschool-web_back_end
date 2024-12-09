#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Retrieve a page of data from an indexed dataset,
        handling sparse or missing indices.

        Args:
            index (int, optional):
                    Starting index for data retrieval. Defaults to None.
            page_size (int, optional):
                    Number of items to retrieve. Defaults to 10.

        Returns:
            Dict: A dictionary containing:
                - 'index': The original starting index
                - 'data': List of retrieved data items
                - 'page_size': Number of items requested
                - 'next_index': Index to use for the next page retrieval
        """
        assert isinstance(index, int) and isinstance(page_size, int)
        assert 0 <= index < len(self.indexed_dataset())
        # récupère les données de DATA_FILE en indexant chaque jeu de données
        dataset = self.indexed_dataset()
        next_index = index
        data = []

        for _ in range(page_size):  # itère le nombre d'element d'une page
            while not dataset.get(next_index):  # skip les résultat NULL
                next_index += 1
            # ajoute les element trouvé dans la list "data"
            data.append(dataset.get(next_index))
            # passe à l'element suivant
            next_index += 1

        return {
            'index': index,
            'data': data,
            'page_size': page_size,
            'next_index': next_index
        }
