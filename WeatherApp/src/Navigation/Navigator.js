import {
    StackNavigator,
} from 'react-navigation';

import ListScreen from '../Containers/ListContainer';
import DetailScreen from '../Containers/DetailContainer';
import AddScreen from '../Containers/AddContainer';

const AppNavigation = StackNavigator({
    Home: { screen: ListScreen },
    Detail: { screen: DetailScreen },
    Add : { screen: AddScreen},
});

export default AppNavigation;