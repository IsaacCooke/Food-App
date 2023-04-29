import { View, Text, Button } from "react-native";
import NotificationHandler from "../../Handlers/NotificationHandler";
import { resetDatabase, initDatabase, initChallenge } from "../../Data/DataDriver";
import {styles} from "../../Themes/MainTheme";

const SettingsScreen = () => {
  return (
    <View>
      <Text style={styles.warningTitle}>Warning!</Text>
      <Text style={styles.warningText}>This will reset all data! Please do not press anything on this page without asking the app creator first!</Text>
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