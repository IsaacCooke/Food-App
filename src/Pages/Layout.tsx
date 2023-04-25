import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import HistoryScreen from './History/HistoryScreen';
import HomeScreen from './Home/HomeScreen';
import SettingsScreen from './Settings/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerStyle: { backgroundColor: '#5b5b5b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  );
}

const HistoryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"History"}
      screenOptions={{
        headerStyle: { backgroundColor: '#5b5b5b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{ title: 'History' }}
      />
    </Stack.Navigator>
  );
}

const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Settings"}
      screenOptions={{
        headerStyle: { backgroundColor: '#5b5b5b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
    </Stack.Navigator>
  );
}

const Layout = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName={"HomeStack"}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: { backgroundColor: '#5b5b5b' },
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="HistoryStack" component={HistoryStack} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Layout;