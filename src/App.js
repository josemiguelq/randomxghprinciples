import { createAppContainer, createStackNavigator } from "react-navigation";
import Routes from "./routes";

const StackNavigator = createStackNavigator({
    Routes: {
        screen: Routes,
        navigationOptions: {
            title: 'eXtreme Go Horse'
        }
    }
});

export default createAppContainer(StackNavigator)