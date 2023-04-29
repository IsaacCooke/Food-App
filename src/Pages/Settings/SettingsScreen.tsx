import { View, Text, Button } from "react-native";
import NotificationHandler from "../../Handlers/NotificationHandler";
import { resetDatabase, initDatabase, initChallenge } from "../../Data/DataDriver";

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
      <NotificationHandler />
      <View>
        <Button onPress={resetDatabase} title="Reset Database" />
        <Button onPress={initDatabase} title="Init Database" />
        <Button onPress={initChallenge} title="Init Challenge" />
      </View>
    </View>
  )
}

export default SettingsScreen;