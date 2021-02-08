export const priceFormatter = (price) => {
    if (!price) {
        return '';
    }
    return price.toLocaleString();
};

export const cleanColumnName = (name) => {
    if (!name) {
        return '';
    }
    const withoutAccent = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    const withoutSpaces = withoutAccent.replace(' ', '_');
    // column name regex
    return withoutSpaces.replace(/[^a-z0-9_]/g, '').toLowerCase();
}

export const stringTrimmed = (st, l = 256) => {
    if (!st) {
        return st;
    }
    return st.length > l ? String(st).substring(0, l - 3) + "..." : st;
}
