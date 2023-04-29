import { StyleSheet } from "react-native";

const primaryColor = '#1e6233';
const secondaryColor = '#621E4D';
const tertiaryColor = '#a20000';
const white = '#fff';
const black = '#000';

export const colors = {
  primary: primaryColor,
  secondary: secondaryColor,
  tertiary: tertiaryColor,
  white: white,
  black: black,
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkButton: {
    padding: 12,
    margin: 10,
    backgroundColor: primaryColor,
    borderRadius: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  optionButton: {
    padding: 20,
    margin: 5,
    backgroundColor: primaryColor,
    borderRadius: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  linkText: {
    color: black,
    fontSize: 24,
    textAlign: 'center',
  },
  cancelButton: {
    padding: 12,
    margin: 10,
    backgroundColor: tertiaryColor,
    borderRadius: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: black,
  },
  centeredTitleText: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: black,
    textAlign: 'center',
    alignSelf: 'center',
  },
  optionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 18,
    color: black,
    textAlign: 'justify',
    paddingHorizontal: 20,
  },
  divider: {
    borderBottomColor: black,
    borderWidth: 0.5,
    marginVertical: 10,
  },
  warningTitle: {
    fontSize: 24,
    color: tertiaryColor,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  warningText: {
    fontSize: 18,
    color: tertiaryColor,
    textAlign: 'center',
    paddingHorizontal: 20,
  }
});