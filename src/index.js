module.exports = equation => {
    const coefficients = equation
        .replace(/ /g, "")
        .match(/[^\^]\d+/g)
        .map(str => +str);
    const discriminant =
        coefficients[1] ** 2 - 4 * coefficients[0] * coefficients[2];

    return [
        Math.round(-coefficients[1] + discriminant ** (1 / 2)) /
            (2 * coefficients[0]),
        Math.round(-coefficients[1] - discriminant ** (1 / 2)) /
            (2 * coefficients[0])
    ].sort((a, b) => a - b);
};
