import {
  Modal,
  Text,
  View,
  Pressable
} from "react-native";
import {useEffect, useState} from "react";
import {
  resetDay,
  updateAfternoonSnack,
  updateBreakfast,
  updateDinner,
  updateEveningSnack,
  updateLunch,
  updateMorningSnack,
} from "../../Data/DataDriver";
import {getDate} from "../../Data/Helpers";
import {styles} from "../../Themes/MainTheme";

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
      <Pressable style={styles.linkButton} onPress={onShowBreakfastModal}>
        <Text style={styles.linkText}>Update Breakfast</Text>
      </Pressable>
      <Pressable style={styles.linkButton} onPress={onShowLunchModal}>
        <Text style={styles.linkText}>Update Lunch</Text>
      </Pressable>
      <Pressable style={styles.linkButton} onPress={onShowDinnerModal}>
        <Text style={styles.linkText}>Update Dinner</Text>
      </Pressable>
      <Pressable style={styles.linkButton} onPress={onShowMorningSnackModal}>
        <Text style={styles.linkText}>Update Morning Snack</Text>
      </Pressable>
      <Pressable style={styles.linkButton} onPress={onShowAfternoonSnackModal}>
        <Text style={styles.linkText}>Update Afternoon Snack</Text>
      </Pressable>
      <Pressable style={styles.linkButton} onPress={onShowEveningSnackModal}>
        <Text style={styles.linkText}>Update Evening Snack</Text>
      </Pressable>
      <Pressable style={styles.linkButton} onPress={resetDay}>
        <Text style={styles.linkText}>Reset Day</Text>
      </Pressable>
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

  useEffect(() => {
    logBreakfast();
  }, [breakfast]);

  const logBreakfast = () => {
    updateBreakfast(getDate(), breakfast);
    onClose();
  }

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.centeredContainer}>
        <Text style={styles.titleText}>Update Breakfast</Text>
          <View>
            {options.map((option) => (
              <Pressable key={option} style={[styles.linkButton, { width: 395}]} onPress={() => setBreakfast(option)}>
                <Text style={styles.linkText}>{option}</Text>
              </Pressable>
            ))}
          </View>
        <Pressable style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.linkText}>Cancel</Text>
        </Pressable>
      </View>
    </Modal>
  )
}

const UpdateLunch = ({isVisible, onClose}) => {
  const [Lunch, setLunch] = useState(0);

  useEffect(() => {
    logLunch();
  }, [Lunch]);

  const logLunch = () => {
    updateLunch(getDate(), Lunch);
    onClose();
  }

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.centeredContainer}>
        <Text style={styles.titleText}>Update Lunch</Text>
        <View>
          {options.map((option) => (
            <Pressable key={option} style={[styles.linkButton, { width: 395}]} onPress={() => setLunch(option)}>
              <Text style={styles.linkText}>{option}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.linkText}>Cancel</Text>
        </Pressable>
      </View>
    </Modal>
  )
}

const UpdateDinner = ({isVisible, onClose}) => {
  const [Dinner, setDinner] = useState(0);

  useEffect(() => {
    logDinner();
  }, [Dinner]);

  const logDinner = () => {
    updateDinner(getDate(), Dinner);
    onClose();
  }

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.centeredContainer}>
        <Text style={styles.titleText}>Update Dinner</Text>
        <View>
          {options.map((option) => (
            <Pressable key={option} style={[styles.linkButton, { width: 395}]} onPress={() => setDinner(option)}>
              <Text style={styles.linkText}>{option}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.linkText}>Cancel</Text>
        </Pressable>
      </View>
    </Modal>
  )
}


const UpdateMorningSnack = ({isVisible, onClose}) => {
  const [MorningSnack, setMorningSnack] = useState(0);

  useEffect(() => {
    logMorningSnack();
  }, [MorningSnack]);

  const logMorningSnack = () => {
    updateMorningSnack(getDate(), MorningSnack);
    onClose();
  }

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.centeredContainer}>
        <Text style={styles.titleText}>Update MorningSnack</Text>
        <View>
          {options.map((option) => (
            <Pressable key={option} style={[styles.linkButton, { width: 395}]} onPress={() => setMorningSnack(option)}>
              <Text style={styles.linkText}>{option}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.linkText}>Cancel</Text>
        </Pressable>
      </View>
    </Modal>
  )
}

const UpdateAfternoonSnack = ({isVisible, onClose}) => {
  const [AfternoonSnack, setAfternoonSnack] = useState(0);

  useEffect(() => {
    logAfternoonSnack();
  }, [AfternoonSnack]);

  const logAfternoonSnack = () => {
    updateAfternoonSnack(getDate(), AfternoonSnack);
    onClose();
  }

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.centeredContainer}>
        <Text style={styles.titleText}>Update AfternoonSnack</Text>
        <View>
          {options.map((option) => (
            <Pressable key={option} style={[styles.linkButton, { width: 395}]} onPress={() => setAfternoonSnack(option)}>
              <Text style={styles.linkText}>{option}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.linkText}>Cancel</Text>
        </Pressable>
      </View>
    </Modal>
  )
}

const UpdateEveningSnack = ({isVisible, onClose}) => {
  const [EveningSnack, setEveningSnack] = useState(0);

  useEffect(() => {
    logEveningSnack();
  }, [EveningSnack]);

  const logEveningSnack = () => {
    updateEveningSnack(getDate(), EveningSnack);
    onClose();
  }

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.centeredContainer}>
        <Text style={styles.titleText}>Update EveningSnack</Text>
        <View>
          {options.map((option) => (
            <Pressable key={option} style={[styles.linkButton, { width: 395}]} onPress={() => setEveningSnack(option)}>
              <Text style={styles.linkText}>{option}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.linkText}>Cancel</Text>
        </Pressable>
      </View>
    </Modal>
  )
}

export default UpdateDay;