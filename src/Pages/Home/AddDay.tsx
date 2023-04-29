import {useEffect, useState} from "react";
import {getDay, logDay} from "../../Data/DataDriver";
import {getDate} from "../../Data/Helpers";
import {
  Pressable,
  ScrollView,
  Text,
  View
} from "react-native";
import {styles} from "../../Themes/MainTheme";

const AddDay = ({navigation}) => {
  const [breakfast, setBreakfast] = useState<number>(0);
  const [lunch, setLunch] = useState<number>(0);
  const [dinner, setDinner] = useState<number>(0);
  const [morningSnack, setMorningSnack] = useState<number>(0);
  const [afternoonSnack, setAfternoonSnack] = useState<number>(0);
  const [eveningSnack, setEveningSnack] = useState<number>(0);

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
    <ScrollView>
      <Text style={styles.linkText}>Breakfast: {breakfast}</Text>
      <View style={styles.optionView}>
      <Pressable style={styles.optionButton} onPress={() => setBreakfast(0)}>
        <Text style={styles.linkText}>0</Text>
      </Pressable>
      <Pressable style={styles.optionButton} onPress={() => setBreakfast(1)}>
        <Text style={styles.linkText}>1</Text>
      </Pressable>
      <Pressable style={styles.optionButton} onPress={() => setBreakfast(2)}>
        <Text style={styles.linkText}>2</Text>
      </Pressable>
      <Pressable style={styles.optionButton} onPress={() => setBreakfast(3)}>
        <Text style={styles.linkText}>3</Text>
      </Pressable>
      <Pressable style={styles.optionButton} onPress={() => setBreakfast(4)}>
        <Text style={styles.linkText}>4</Text>
      </Pressable>
      <Pressable style={styles.optionButton} onPress={() => setBreakfast(5)}>
        <Text style={styles.linkText}>5</Text>
      </Pressable>
      </View>

      <Text style={styles.linkText}>Morning Snack: {morningSnack}</Text>
      <View style={styles.optionView}>
        <Pressable style={styles.optionButton} onPress={() => setMorningSnack(0)}>
          <Text style={styles.linkText}>0</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setMorningSnack(1)}>
          <Text style={styles.linkText}>1</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setMorningSnack(2)}>
          <Text style={styles.linkText}>2</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setMorningSnack(3)}>
          <Text style={styles.linkText}>3</Text>
        </Pressable>
      </View>

      <Text style={styles.linkText}>Lunch: {lunch}</Text>
      <View style={styles.optionView}>
        <Pressable style={styles.optionButton} onPress={() => setLunch(0)}>
          <Text style={styles.linkText}>0</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setLunch(1)}>
          <Text style={styles.linkText}>1</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setLunch(2)}>
          <Text style={styles.linkText}>2</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setLunch(3)}>
          <Text style={styles.linkText}>3</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setLunch(4)}>
          <Text style={styles.linkText}>4</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setLunch(5)}>
          <Text style={styles.linkText}>5</Text>
        </Pressable>
      </View>

      <Text style={styles.linkText}>Afternoon Snack: {afternoonSnack}</Text>
      <View style={styles.optionView}>
        <Pressable style={styles.optionButton} onPress={() => setAfternoonSnack(0)}>
          <Text style={styles.linkText}>0</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setAfternoonSnack(1)}>
          <Text style={styles.linkText}>1</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setAfternoonSnack(2)}>
          <Text style={styles.linkText}>2</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setAfternoonSnack(3)}>
          <Text style={styles.linkText}>3</Text>
        </Pressable>
      </View>

      <Text style={styles.linkText}>Dinner: {dinner}</Text>
      <View style={styles.optionView}>
        <Pressable style={styles.optionButton} onPress={() => setDinner(0)}>
          <Text style={styles.linkText}>0</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setDinner(1)}>
          <Text style={styles.linkText}>1</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setDinner(2)}>
          <Text style={styles.linkText}>2</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setDinner(3)}>
          <Text style={styles.linkText}>3</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setDinner(4)}>
          <Text style={styles.linkText}>4</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setDinner(5)}>
          <Text style={styles.linkText}>5</Text>
        </Pressable>
      </View>

      <Text style={styles.linkText}>Evening Snack: {eveningSnack}</Text>
      <View style={styles.optionView}>
        <Pressable style={styles.optionButton} onPress={() => setEveningSnack(0)}>
          <Text style={styles.linkText}>0</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setEveningSnack(1)}>
          <Text style={styles.linkText}>1</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setEveningSnack(2)}>
          <Text style={styles.linkText}>2</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={() => setEveningSnack(3)}>
          <Text style={styles.linkText}>3</Text>
        </Pressable>
      </View>

      <Pressable style={styles.linkButton} onPress={handleLogDay}>
        <Text style={styles.linkText}>Log Day</Text>
      </Pressable>
      <Pressable style={styles.cancelButton} onPress={() => navigation.pop()}>
        <Text style={styles.linkText}>Cancel</Text>
      </Pressable>
    </ScrollView>
  );
}

export default AddDay;