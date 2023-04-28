import {
  View,
  Text,
  Pressable
} from "react-native";
import { styles } from "../../Themes/MainTheme";

const HomeScreen = ({navigation}) => {
  const AddDay = () => {
    navigation.push("AddDay");
  }

  const UpdateDay = () => {
    navigation.push("UpdateDay");
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={AddDay} style={styles.linkButton}>
        <Text>Add Day</Text>
      </Pressable>
      <Pressable onPress={UpdateDay} style={styles.linkButton}>
        <Text>Update Day</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;