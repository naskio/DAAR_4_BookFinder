import requests
from urllib.request import urlopen
from .nlp import clean
import pprint as p_printer


def get_text_from_url(url: str) -> str:
    res = requests.get(url)
    if res:
        return res.text
    else:
        return ""


def get_text_from_url_v2(url: str) -> str:
    return urlopen(url).read().decode("utf-8")


def get_clean_text_from_url(url: str) -> str:
    return clean(get_text_from_url(url))


def pprint(x):
    pp = p_printer.PrettyPrinter(indent=4, depth=4)
    pp.pprint(x)
