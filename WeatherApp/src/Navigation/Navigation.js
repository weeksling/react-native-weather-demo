import {
    StackNavigator,
  } from 'react-navigation';
  
  import ListView from './AddView';
  import DetailView from './DetailView';
  import AddView from './AddView';
  
  const AppNavigation = StackNavigator({
    Home: { screen: ListView },
    Detail: { screen: DetailView },
    Add : { screen: AddView },
  });
  
  export default AppNavigation;