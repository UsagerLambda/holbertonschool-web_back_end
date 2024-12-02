#!/usr/bin/env python3

"""
Function that print the length of each item in the list
"""

from typing import Iterable, Sequence, List, Tuple

"""
modules
"""


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Lire sortie de l'exemple de la consigne
    """
    return [(i, len(i)) for i in lst]
