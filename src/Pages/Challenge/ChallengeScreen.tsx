import {Pressable, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {styles} from "../../Themes/MainTheme";
import {getChallenge, addChallenge} from "../../Data/DataDriver";

const ChallengeScreen = () => {
  const [state, refresh] = useState<boolean>(false);
  const [challenge, setChallenge] = useState([]);

  const array = [
    'Swim at least twice this week.',
    'Go for two long walks this week.',
    'Reduce cheese eating all week.',
    'Avoid sugary foods.',
    'Drink more water.',
    'Walk at least 10km this week.',
    'Spend at least an hour reading this week.',
    'Eat at least 4 vegan meals this week.',
    'Every snack must be healthy this week.',
    'Do at least 10000 steps a day for 4 days this week.',
    'Go to the gym this week.',
    'Have smaller portions for dinner this week.',
    'Have smaller portions for lunch this week.',
    'Do some gardening.',
    'Walk everywhere within a mile this week when going alone.',
    'Spend more time outdoors.',
  ];

  useEffect(() => {
    getChallenge(setChallenge);
  }, [state]);

  const GetChallenge = () => {
    return (
      <View>
        <Text>
          {challenge.map((item => (
            <Text>{item.challenge}</Text>
          )))}
        </Text>
      </View>
    )
  }

  const getNewChallenge = () => {
    const randomIndex = Math.floor(Math.random() * array.length);
    addChallenge(array[randomIndex]);
    refresh(!state);
  }

  return (
    <View>
      <Pressable style={styles.linkButton} onPress={getNewChallenge}>
        <Text style={styles.linkText}>Get Challenge</Text>
      </Pressable>
      <GetChallenge />
    </View>
  );
};

export default ChallengeScreen;