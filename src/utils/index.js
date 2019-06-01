export const selectRandomPhrase = phrases => {
    const phrasesLenght = phrases.length;
    const randomIndex = Math.floor(Math.random() * phrasesLenght);
    return phrases[randomIndex];
};

export default {
    selectRandomPhrase
};