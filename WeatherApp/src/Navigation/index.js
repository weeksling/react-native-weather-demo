import React, {Component} from 'react';
import { connect } from "react-redux";
import StackNavigator from './Navigator'

class AppNavigation extends Component {
    render () {
        return (
            <StackNavigator
                />
        )
    }
}

export default AppNavigation
