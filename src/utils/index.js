import { Share } from 'react-native';

export const selectRandomPhrase = phrases => {
    const phrasesLenght = phrases.length;
    const randomIndex = Math.floor(Math.random() * phrasesLenght);
    return phrases[randomIndex];
};

export const share = axioma => {
    const shareOptions = {
        title: axioma.subTitle,
        url: '',
        message: axioma.message,
        subject: 'Subject',
    };
    return Share.share(shareOptions);
};

export default {
    selectRandomPhrase,
    share
};