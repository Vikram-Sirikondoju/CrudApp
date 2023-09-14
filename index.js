/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Dashboard from './Components/Dashboard';
import User from './Components/User';

AppRegistry.registerComponent(appName, () => Dashboard);
