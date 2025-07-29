const regular = /\b[^Aa\s]{6,}\b/g;

const text = "Wonderful Joyful Happiness Time Task Apple Banana cheerful";

const match1 = text.match(regular);

console.log(match1)
