import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeTab from "./HomeTab";

const StackNavigator = createStackNavigator({
    HomeTab: {
        screen: HomeTab,
        navigationOptions: {
            title: 'eXtreme Go Horse'
        }
    }
});

export default createAppContainer(StackNavigator)