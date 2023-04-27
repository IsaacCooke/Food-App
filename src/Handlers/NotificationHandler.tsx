import * as Notifications from 'expo-notifications';
import { Button } from 'react-native';
const NotificationHandler = () => {
  return (
    <>
      <Button onPress={scheduleNotifications} title="Trigger Local Notifications" color="#841584" accessibilityLabel="Trigger Local Notifications"/>
    </>
  )
}

async function scheduleNotifications() {
  const hasPermission = await allowNotifications();
  if (hasPermission) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'It\'s time to log today\'s meals!',
        body: 'Click here to log your meals for today',
      },
      trigger: {
        hour: 19,
        minute: 30,
        repeats: true,
      },
    });
  }
}

async function allowNotifications() {
  const settings = await Notifications.getPermissionsAsync();
  return settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL;
}

export default NotificationHandler;