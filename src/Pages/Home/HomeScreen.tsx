import { View, Button } from "react-native";
import {Picker} from "@react-native-picker/picker";
import { useState } from "react";
import { logDay } from "../../Data/DataDriver";
import { getDate } from "../../Data/Helpers";

const HomeScreen = () => {
  const [breakfast, setBreakfast] = useState(0);
  const [lunch, setLunch] = useState(0);
  const [dinner, setDinner] = useState(0);
  const [morningSnack, setMorningSnack] = useState(0);
  const [afternoonSnack, setAfternoonSnack] = useState(0);
  const [eveningSnack, setEveningSnack] = useState(0);

  const [showBreakfast, setShowBreakfast] = useState(false);
  const [showLunch, setShowLunch] = useState(false);
  const [showDinner, setShowDinner] = useState(false);
  const [showMorningSnack, setShowMorningSnack] = useState(false);
  const [showAfternoonSnack, setShowAfternoonSnack] = useState(false);
  const [showEveningSnack, setShowEveningSnack] = useState(false);

  const handleLogDay = () => {
    logDay(getDate(), Number(breakfast), Number(lunch), Number(dinner), Number(morningSnack), Number(afternoonSnack), Number(eveningSnack));
    setBreakfast(0);
    setLunch(0);
    setDinner(0);
    setMorningSnack(0);
    setAfternoonSnack(0);
    setEveningSnack(0);
  };


  return (
    <View>
      <Button title="Show Breakfast" onPress={() => setShowBreakfast(!showBreakfast)} />
      {showBreakfast && (
        <Picker
          selectedValue={breakfast}
          onValueChange={(itemValue) => setBreakfast(itemValue)}
        >
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      )}
      <Button title="Show Lunch" onPress={() => setShowLunch(!showLunch)} />
      {showLunch && (
        <Picker
          selectedValue={lunch}
          onValueChange={(itemValue) => setLunch(itemValue)}
        >
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      )}
      <Button title="Show Dinner" onPress={() => setShowDinner(!showDinner)} />
      {showDinner && (
        <Picker
          selectedValue={dinner}
          onValueChange={(itemValue) => setDinner(itemValue)}
        >
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      )}
      <Button title="Show Morning Snack" onPress={() => setShowMorningSnack(!showMorningSnack)} />
      {showMorningSnack && (
        <Picker
          selectedValue={morningSnack}
          onValueChange={(itemValue) => setMorningSnack(itemValue)}
        >
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
        </Picker>
      )}
      <Button title="Show Afternoon Snack" onPress={() => setShowAfternoonSnack(!showAfternoonSnack)} />
      {showAfternoonSnack && (
        <Picker
          selectedValue={afternoonSnack}
          onValueChange={(itemValue) => setAfternoonSnack(itemValue)}
        >
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
        </Picker>
      )}
      <Button title="Show Evening Snack" onPress={() => setShowEveningSnack(!showEveningSnack)} />
      {showEveningSnack && (
        <Picker
          selectedValue={eveningSnack}
          onValueChange={(itemValue) => setEveningSnack(itemValue)}
        >
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
        </Picker>
      )}
      <Button title="Log Day" onPress={handleLogDay} />
    </View>
  )
}

export default HomeScreen;