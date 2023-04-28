import {
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import {useState} from "react";
import {
  updateAfternoonSnack,
  updateBreakfast,
  updateDinner,
  updateEveningSnack,
  updateLunch,
  updateMorningSnack,
} from "../../Data/DataDriver";
import {getDate} from "../../Data/Helpers";

const UpdateDay = () => {
  const [showBreakfastModal, setShowBreakfastModal] = useState(false);
  const [showLunchModal, setShowLunchModal] = useState(false);
  const [showDinnerModal, setShowDinnerModal] = useState(false);
  const [showMorningSnackModal, setShowMorningSnackModal] = useState(false);
  const [showAfternoonSnackModal, setShowAfternoonSnackModal] = useState(false);
  const [showEveningSnackModal, setShowEveningSnackModal] = useState(false);

  const onShowBreakfastModal = () => {
    setShowBreakfastModal(true);
  }

  const onHideBreakfastModal = () => {
    setShowBreakfastModal(false);
  }

  const onShowLunchModal = () => {
    setShowLunchModal(true);
  }

  const onHideLunchModal = () => {
    setShowLunchModal(false);
  }

  const onShowDinnerModal = () => {
    setShowDinnerModal(true);
  }

  const onHideDinnerModal = () => {
    setShowDinnerModal(false);
  }

  const onShowMorningSnackModal = () => {
    setShowMorningSnackModal(true);
  }

  const onHideMorningSnackModal = () => {
    setShowMorningSnackModal(false);
  }

  const onShowAfternoonSnackModal = () => {
    setShowAfternoonSnackModal(true);
  }

  const onHideAfternoonSnackModal = () => {
    setShowAfternoonSnackModal(false);
  }

  const onShowEveningSnackModal = () => {
    setShowEveningSnackModal(true);
  }

  const onHideEveningSnackModal = () => {
    setShowEveningSnackModal(false);
  }

  return (
    <View>
      <Text>Update Day</Text>
      <Button title={"Update Breakfast"} onPress={onShowBreakfastModal} />
      <Button title={"Update Lunch"} onPress={onShowLunchModal} />
      <Button title={"Update Dinner"} onPress={onShowDinnerModal} />
      <Button title={"Update Morning Snack"} onPress={onShowMorningSnackModal} />
      <Button title={"Update Afternoon Snack"} onPress={onShowAfternoonSnackModal} />
      <Button title={"Update Evening Snack"} onPress={onShowEveningSnackModal} />
      <UpdateBreakfast isVisible={showBreakfastModal} onClose={onHideBreakfastModal} />
      <UpdateLunch isVisible={showLunchModal} onClose={onHideLunchModal} />
      <UpdateDinner isVisible={showDinnerModal} onClose={onHideDinnerModal} />
      <UpdateMorningSnack isVisible={showMorningSnackModal} onClose={onHideMorningSnackModal} />
      <UpdateAfternoonSnack isVisible={showAfternoonSnackModal} onClose={onHideAfternoonSnackModal} />
      <UpdateEveningSnack isVisible={showEveningSnackModal} onClose={onHideEveningSnackModal} />
    </View>
  )
}

const UpdateBreakfast = ({isVisible, onClose}) => {
  const [breakfast, setBreakfast] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const logBreakfast = () => {
    updateBreakfast(getDate(), breakfast);
    onClose();
  }

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.container}>
        <Text>Update Breakfast</Text>
        <Button title="Show Breakfast" onPress={() => setShowOptions(!showOptions)} />
        {showOptions && (
          <View>
            {options.map((option) => (
              <TouchableOpacity key={option} onPress={() => setBreakfast(option)}>
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Button title={"Update"} onPress={logBreakfast} />
        <Button title={"Cancel"} onPress={onClose} />
      </View>
    </Modal>
  )
}

const UpdateLunch = ({isVisible, onClose}) => {
  const [lunch, setLunch] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const logLunch = () => {
    updateLunch(getDate(), lunch);
    onClose();
  }

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.container}>
        <Text>Update Lunch</Text>
        <Button title="Show Options" onPress={() => setShowOptions(!showOptions)} />
        {showOptions && (
          <View>
            {options.map((option) => (
              <TouchableOpacity key={option} onPress={() => setLunch(option)}>
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Button title={"Update"} onPress={logLunch} />
        <Button title={"Cancel"} onPress={onClose} />
      </View>
    </Modal>
  )
}

const UpdateDinner = ({isVisible, onClose}) => {
  const [dinner, setDinner] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const logDinner = () => {
    updateDinner(getDate(), dinner);
    onClose();
  }

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.container}>
        <Text>Update Dinner</Text>
        <Button title="Show Options" onPress={() => setShowOptions(!showOptions)} />
        {showOptions && (
          <View>
            {options.map((option) => (
              <TouchableOpacity key={option} onPress={() => setDinner(option)}>
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Button title={"Update"} onPress={logDinner} />
        <Button title={"Cancel"} onPress={onClose} />
      </View>
    </Modal>
  )
}


const UpdateMorningSnack = ({isVisible, onClose}) => {
  const [morningSnack, setMorningSnack] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const logMorningSnack = () => {
    updateMorningSnack(getDate(), morningSnack);
    onClose();
  }

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.container}>
        <Text>Update Morning Snack</Text>
        <Button title="Show Options" onPress={() => setShowOptions(!showOptions)} />
        {showOptions && (
          <View>
            {options.map((option) => (
              <TouchableOpacity key={option} onPress={() => setMorningSnack(option)}>
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Button title={"Update"} onPress={logMorningSnack} />
        <Button title={"Cancel"} onPress={onClose} />
      </View>
    </Modal>
  )
}

const UpdateAfternoonSnack = ({isVisible, onClose}) => {
  const [afternoonSnack, setAfternoonSnack] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const logAfternoonSnack = () => {
    updateAfternoonSnack(getDate(), afternoonSnack);
    onClose();
  }

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.container}>
        <Text>Update Afternoon Snack</Text>
        <Button title="Show Options" onPress={() => setShowOptions(!showOptions)} />
        {showOptions && (
          <View>
            {options.map((option) => (
              <TouchableOpacity key={option} onPress={() => setAfternoonSnack(option)}>
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Button title={"Update"} onPress={logAfternoonSnack} />
        <Button title={"Cancel"} onPress={onClose} />
      </View>
    </Modal>
  )
}

const UpdateEveningSnack = ({isVisible, onClose}) => {
  const [eveningSnack, setEveningSnack] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const logEveningSnack = () => {
    updateEveningSnack(getDate(), eveningSnack);
    onClose();
  }

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.container}>
        <Text>Update Evening Snack</Text>
        <Button title="Show Options" onPress={() => setShowOptions(!showOptions)} />
        {showOptions && (
          <View>
            {options.map((option) => (
              <TouchableOpacity key={option} onPress={() => setEveningSnack(option)}>
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Button title={"Update"} onPress={logEveningSnack} />
        <Button title={"Cancel"} onPress={onClose} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default UpdateDay;