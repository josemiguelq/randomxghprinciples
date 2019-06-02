import React from 'react';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import Routes from './routes'

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default function App() {
 return (
     <ThemeContext.Provider value={getTheme(uiTheme)}>
        <Routes/>
     </ThemeContext.Provider>
 );
}