import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HistoryScreen from './History/HistoryScreen';
import HomeScreen from './Home/HomeScreen';
import SettingsScreen from './Settings/SettingsScreen';

const Tab = createBottomTabNavigator();

const Layout = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}