import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import HistoryScreen from './History/HistoryScreen';
import HomeScreen from './Home/HomeScreen';
import SettingsScreen from './Settings/SettingsScreen';

import AddDay from './Home/AddDay';
import UpdateDay from './Home/UpdateDay';

import { colors } from '../Themes/MainTheme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="AddDay"
        component={AddDay}
        options={{ title: 'Add Day' }}
      />
      <Stack.Screen
        name="UpdateDay"
        component={UpdateDay}
        options={{ title: 'Update Day' }}
      />
    </Stack.Navigator>
  );
}

const HistoryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"History"}
      screenOptions={{
        headerStyle: { backgroundColor: colors.secondary },
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
        headerStyle: { backgroundColor: colors.secondary },
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
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: { backgroundColor: colors.secondary },
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