import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen';

const App = StackNavigator({
  Home: { screen: HomeScreen }
});

export default App;
