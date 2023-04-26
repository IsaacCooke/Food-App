import { StatusBar } from 'expo-status-bar';
import Layout from './src/Pages/Layout';
import {initDatabase} from "./src/Data/DataDriver";
import {useEffect} from "react";

export default function App() {
  useEffect(() => {
    initDatabase();
  })

  return (
    <>
      <Layout />
      <StatusBar style="auto" />
    </>
  );
}