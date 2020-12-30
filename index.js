export const lerp = (a, b, t) => {
    return (1 - t) * a + b * t;
};

export const inverseLerp = (a, b, v) => {
    return (v - a) / (b - a);
};
