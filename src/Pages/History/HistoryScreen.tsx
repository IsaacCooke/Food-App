import {
  View,
  Text,
  Modal,
  Button,
  Pressable,
  SafeAreaView, ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import {getWeek} from "../../Data/DataDriver";
import {Ionicons} from "@expo/vector-icons";
import {styles} from "../../Themes/MainTheme";

const HistoryScreen = () => {
  const [days, setDays] = useState([]);
  const [showDailyBreakdown, setShowDailyBreakdown] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    getWeek(setDays);
  }, [isFocused]);

  const onShowDailyBreakdown = () => {
    setShowDailyBreakdown(true);
  }

  const onHideDailyBreakdown = () => {
    setShowDailyBreakdown(false);
  }

  const GetWeeklyScore = () => {
    let score = 0;
    days.forEach(day => {
      score += day.breakfast + day.lunch + day.dinner + day.morning_snack + day.afternoon_snack + day.evening_snack;
    });

    if (score < 77){
      return (
        <View>
          <Text style={styles.centeredTitleText}>Well Done!</Text>
          <Text style={styles.infoText}>Your score over the past week was {score}. That's {77 - score} less than your target. <Ionicons name={"happy-outline"} size={16}/></Text>
        </View>
      )
    } else if(score === 77) {
      return (
        <View>
          <Text style={styles.centeredTitleText}>Well Done!</Text>
          <Text style={styles.infoText}>Your score over the past week was {score}, exactly your target. <Ionicons name={"happy-outline"} size={32}/></Text>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={styles.centeredTitleText}>Not Quite...</Text>
          <Text style={styles.infoText}>Your score over the past week was {score}. That's {score - 77} more than your target. <Ionicons name={"sad-outline"} size={32}/></Text>
        </View>
      )
    }
  }

  const GetDailyBreakdown = ({isVisible, onClose}) => {
    return (
      <Modal animationType={"slide"} transparent={false} visible={isVisible}>
        <SafeAreaView>
          <ScrollView>
            <Text style={styles.centeredTitleText}>Daily Breakdown</Text>
            {days.map(day => (
              <View style={styles.centeredContainer} key={day.date}>
                <Text>Date: {day.date}</Text>
                <Text>Breakfast: {day.breakfast}</Text>
                <Text>Lunch: {day.lunch}</Text>
                <Text>Dinner: {day.dinner}</Text>
                <Text>Morning Snack: {day.morning_snack}</Text>
                <Text>Afternoon Snack: {day.afternoon_snack}</Text>
                <Text>Evening Snack: {day.evening_snack}</Text>
                <GetDailyScore score={day.breakfast + day.lunch + day.dinner + day.morning_snack + day.afternoon_snack + day.evening_snack} />
                <View style={styles.divider} />
              </View>
            ))}
            <Button title={"Close"} onPress={onClose} />
          </ScrollView>
        </SafeAreaView>
      </Modal>
    );
  };

  const GetDailyScore = ({score}) => {
    if (score < 11){
      return (
        <View>
          <Text>Well Done!</Text>
          <Text>Your score for this day was {score}. That's {11 - score} less than your target. <Ionicons name={"happy-outline"} size={16}/> </Text>
        </View>
      );
    } else if(score === 11) {
      return (
        <View>
          <Text>Well Done!</Text>
          <Text>Your score for this day was {score}, exactly your target. <Ionicons name={"happy-outline"} size={16}/></Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>Not Quite...</Text>
          <Text>Your score for this day was {score}. That's {score - 11} more than your target. <Ionicons name={"sad-outline"} size={16}/></Text>
        </View>
      );
    }
  };

  return (
    <View>
      <GetWeeklyScore />
      <Pressable style={styles.linkButton} onPress={onShowDailyBreakdown}>
        <Text style={styles.linkText}>Show Daily Breakdown</Text>
      </Pressable>
      <GetDailyBreakdown isVisible={showDailyBreakdown} onClose={onHideDailyBreakdown} />
    </View>
  );
}

export default HistoryScreen;