import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./components/Home";

const StackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    }
});

export default createAppContainer(StackNavigator)