import {Share} from 'react-native';


export const share = axioma => {
    const shareOptions = {
        title: axioma.title,
        url: '',
        message: axioma.message,
        subject: 'Subject'
    };

    return Share.share(shareOptions);
};

export default share