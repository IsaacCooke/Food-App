import { View, Text, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  const AddDay = () => {
    navigation.push("AddDay");
  }

  const UpdateDay = () => {
    navigation.push("UpdateDay");
  }

  return (
    <View>
      <Text>Home</Text>
      <Button onPress={AddDay} title="Add Day" />
      <Button onPress={UpdateDay} title="Update Day" />
    </View>
  );
}

export default HomeScreen;