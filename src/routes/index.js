import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from '../containers/Home';
import Listing from '../containers/Listing';
import translate from "../locale";

const Routes = createAppContainer(createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: translate('axiomOfTheDay')
        }
    },
    Listing: {
        screen: Listing,
        navigationOptions: {
            title: translate('listOfAxims')
        }
    }
}));

export default Routes;