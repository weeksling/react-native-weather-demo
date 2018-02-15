import {
  StackNavigator,
} from 'react-navigation';

import ListView from './ListView';
import DetailView from './DetailView';
import AddView from './AddView';

const App = StackNavigator({
  Home: { screen: ListView },
  Detail: { screen: DetailView },
  Add : { screen: AddView },
});

export default App;
