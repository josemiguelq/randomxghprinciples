import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./components/Home";

const StackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'eXtreme Go Horse'
        }
    }
});

export default createAppContainer(StackNavigator)

