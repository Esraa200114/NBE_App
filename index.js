import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import setup from './setup';
import 'react-native-gesture-handler';
import DrawerPage from './src/components/pages/DrawerPage';

AppRegistry.registerComponent(appName, () => App);

