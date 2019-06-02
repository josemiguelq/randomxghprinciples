import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeTab from "./HomeTab";
import {COLOR} from "react-native-material-ui";

const StackNavigator = createStackNavigator({
    HomeTab: {
        screen: HomeTab,
        navigationOptions: {
            title: 'eXtreme Go Horse',
            headerTitleStyle: { color: COLOR.green500 },
        }
    }
});

export default createAppContainer(StackNavigator)