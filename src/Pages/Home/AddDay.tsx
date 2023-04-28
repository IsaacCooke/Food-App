import {useEffect, useState} from "react";
import {getDay, logDay} from "../../Data/DataDriver";
import {getDate} from "../../Data/Helpers";
import {Button, View} from "react-native";
import {Picker} from "@react-native-picker/picker";

const AddDay = ({navigation}) => {
  const [breakfast, setBreakfast] = useState<number>(0);
  const [lunch, setLunch] = useState<number>(0);
  const [dinner, setDinner] = useState<number>(0);
  const [morningSnack, setMorningSnack] = useState<number>(0);
  const [afternoonSnack, setAfternoonSnack] = useState<number>(0);
  const [eveningSnack, setEveningSnack] = useState<number>(0);

  const [showBreakfast, setShowBreakfast] = useState<boolean>(false);
  const [showLunch, setShowLunch] = useState<boolean>(false);
  const [showDinner, setShowDinner] = useState<boolean>(false);
  const [showMorningSnack, setShowMorningSnack] = useState<boolean>(false);
  const [showAfternoonSnack, setShowAfternoonSnack] = useState<boolean>(false);
  const [showEveningSnack, setShowEveningSnack] = useState<boolean>(false);

  const [state, refresh] = useState<boolean>(false);

  useEffect(() => {
    getDay(getDate(), (day) => {
      if (day) {
        setBreakfast(day.breakfast);
        setLunch(day.lunch);
        setDinner(day.dinner);
        setMorningSnack(day.morning_snack);
        setAfternoonSnack(day.afternoon_snack);
        setEveningSnack(day.evening_snack);
      }
    });
  }, [state]);

  const handleLogDay = () => {
    logDay(getDate(), Number(breakfast), Number(lunch), Number(dinner), Number(morningSnack), Number(afternoonSnack), Number(eveningSnack));

    refresh(!state);
    navigation.pop();
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
  );
}

export default AddDay;