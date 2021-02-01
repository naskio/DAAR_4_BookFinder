from django.conf import settings


def calculate_distance(keywords_1, keywords_2) -> float:
    p = 0.0
    q = 0.0
    keywords_1_map = {}
    for kw in keywords_1:
        keywords_1_map[kw['keyword']] = kw['occurrence_number']
    for x in keywords_2:
        kw = x['keyword']
        occ = x['occurrence_number']
        if kw in keywords_1_map:
            mx, mn = (occ, keywords_1_map[kw]) if occ > keywords_1_map[kw] else (keywords_1_map[kw], occ)
            p += (mx - mn)
            q += mx
    if q == 0:
        return 1.0
    return p / q


def is_jaccard_similar(keywords_1, keywords_2) -> bool:
    return calculate_distance(keywords_1, keywords_2) <= settings.JACCARD_DISTANCE_THETA
