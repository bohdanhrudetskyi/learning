//testLib file v. 0.0.0.1
//------------This is a random generator for buttons clicking------------------
export function getRandomInteger (min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min) + min);
}

