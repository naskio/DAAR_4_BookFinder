from .strings import to_lowercase, uni_decode, trim
from nltk.stem import WordNetLemmatizer
from typing import List, Set
import textdistance
# from nltk.stem import PorterStemmer
# from nltk.tokenize import word_tokenize
import re
from rake_nltk import Rake
from gensim.summarization import keywords
from django.conf import settings


def clean(st: str) -> str:
    """to lowercase, replace accents, remove special chars, remove extra spaces"""
    st = to_lowercase(st)
    # remove accents from words
    st = uni_decode(st)
    # removing non-word characters
    st = re.sub(r"[^A-Za-z]", " ", st)
    # removing extra spaces
    st = trim(st)
    return st


# Stemming

lem = WordNetLemmatizer()


def stem(st: str) -> str:
    return " ".join(map(lem.lemmatize, st.split(' ')))


# Keyword Extraction
def rake_ek(text: str) -> List[str]:
    """Using RAKE"""
    rake = Rake()
    rake.extract_keywords_from_text(text)
    rake_keywords = rake.get_ranked_phrases()
    rake_keywords = map(stem, rake_keywords)
    return list(set(rake_keywords))


def word_rank_ek(text: str) -> List[str]:
    """Using WordRank"""
    text_rank_keywords = keywords(text).split('\n')
    text_rank_keywords = map(stem, text_rank_keywords)
    return list(set(text_rank_keywords))


def extract_keywords(text: str) -> List[str]:
    """Extract Keywords from text book"""
    return word_rank_ek(text)[:settings.MAX_KEYWORDS_PER_BOOK]


def extract_keywords_with_occurrences(text: str) -> List:
    """Extract Keywords with Occurrences from text book"""
    if not text:
        return []
    kws = word_rank_ek(text)
    res = list(map(lambda x: {
        "keyword": x,
        "occurrence_number": max(text.count(x), 1),
    }, kws))
    res.sort(key=lambda x: x.get('occurrence_number'), reverse=True)
    # return res
    return res[: settings.MAX_KEYWORDS_PER_BOOK]
