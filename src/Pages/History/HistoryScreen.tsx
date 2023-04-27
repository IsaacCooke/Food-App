import {View, Text} from "react-native";
import {useEffect, useState} from "react";
import {useIsFocused} from "@react-navigation/native";
import {getDays} from '../../Data/DataDriver';

const HistoryScreen = () => {
  const [days, setDays] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getDays(setDays);
  }, [isFocused]);

  return (
    <View>
      {days.length > 0 ? (
        days.map(day => (
          <View key={day.date}>
            <Text>Date: {day.date}</Text>
            <Text>Breakfast: {day.breakfast}</Text>
            <Text>Lunch: {day.lunch}</Text>
            <Text>Dinner: {day.dinner}</Text>
            <Text>Morning Snack: {day.morning_snack}</Text>
            <Text>Afternoon Snack: {day.afternoon_snack}</Text>
            <Text>Evening Snack: {day.evening_snack}</Text>
            <Text>Daily Score: {day.breakfast + day.lunch + day.dinner + day.morning_snack + day.afternoon_snack + day.evening_snack}</Text>
          </View>
        ))
      ) : (
        <Text>No days logged yet</Text>
      )}
    </View>
  );
}

export default HistoryScreen;