import { StatusBar } from 'expo-status-bar';
import Layout from './src/Pages/Layout';
import {initDatabase} from "./src/Data/DataDriver";
import {useEffect} from "react";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  useEffect(() => {
    initDatabase();


  }, [])

  return (
    <>
      <Layout />
      <StatusBar style="auto" />
    </>
  );
}