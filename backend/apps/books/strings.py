import re
import unicodedata


def to_uppercase(st: str):
    """
    transform string to upperCase
    """
    if st:
        return st.upper()


def to_lowercase(st: str):
    """
    transform string to lowerCase
    """
    if st:
        return st.lower()


def capitalize(st: str):
    """
    first char of each word to upperCase, else lowerCase.
    :param st:
    :return:
    """
    if st:
        return st.title()


def trim(sti: str):
    """
    remove any leading or trailing whitespaces
    :param sti:
    :return:
    """
    if sti:
        st = str(sti).strip()
        st = re.sub(r'\s+', ' ', st)
        return st


def uni_decode(st):
    """
    removing accents from string
    :param st:
    :return:
    """
    if st:
        return ''.join((c for c in unicodedata.normalize('NFD', str(st)) if unicodedata.category(c) != 'Mn'))
