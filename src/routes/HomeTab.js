import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Home from '../containers/Home';
import Listing from '../containers/Listing';
import translate from "../locale";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLOR } from 'react-native-material-ui';


const Routes = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: translate('axiomOfTheDay'),
            tabBarIcon: ({tintColor}) =>
                <Icon name="lightbulb" size={25} color={tintColor} />
        }
    },
    Listing: {
        screen: Listing,
        navigationOptions: {
            tabBarLabel: translate('listOfAxims'),
            tabBarIcon: ({tintColor}) =>
                <Icon name="list" size={25} color={tintColor} />
        }
    }
}, {
    initialRouteName: 'Home',
    activeColor: COLOR.green500,
    barStyle: { backgroundColor: '#fff' }
});

export default createAppContainer(Routes);