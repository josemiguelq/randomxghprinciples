import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from '../containers/Home';
import Listing from '../containers/Listing';
import translate from "../locale";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLOR } from 'react-native-material-ui';


const Routes = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarOptions: {
              activeTintColor: COLOR.green500
            },
            tabBarLabel: translate('axiomOfTheDay'),
            tabBarIcon: ({tintColor}) =>
                <Icon name="lightbulb" size={25} color={tintColor} />
        }
    },
    Listing: {
        screen: Listing,
        navigationOptions: {
            tabBarOptions: {
                activeTintColor: COLOR.green500
            },
            tabBarLabel: translate('listOfAxims'),
            tabBarIcon: ({tintColor}) =>
                <Icon name="list" size={25} color={tintColor} />
        }
    }
});

export default createAppContainer(Routes);