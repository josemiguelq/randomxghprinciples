import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from '../components/Home';
import Listing from '../components/Listing';

const Routes = createAppContainer(createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Axioma do dia'
        }
    },
    Listing: {
        screen: Listing,
        navigationOptions: {
            title: 'Lista de Axiomas'
        }
    }
}));

export default Routes;