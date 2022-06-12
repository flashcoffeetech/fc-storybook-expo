/* eslint-disable dot-notation */
import notifee, {
  AndroidBadgeIconType,
  AndroidImportance,
  AndroidVisibility,
  Notification,
} from '@notifee/react-native';

const channelList = new Map<string, string>();

channelList['default'] = 'Default';
channelList['promo'] = 'Promo';
channelList['updates'] = 'Updates';

export const onDisplayNotification = async function (remoteMessage: any) {
  let importance = AndroidImportance.HIGH;
  let badgeIconType = AndroidBadgeIconType.LARGE;
  let visibility = AndroidVisibility.PRIVATE;

  // Create a channel
  const channelId = await notifee.createChannel({
    id: remoteMessage.notification?.android?.channelId || 'default',
    name:
      channelList[remoteMessage.notification?.android?.channelId] || 'Default',
    visibility,
  });

  if (remoteMessage.notification) {
    let notification: Notification = remoteMessage.notification;
    notification.android.channelId = channelId;
    notification.android.badgeIconType = badgeIconType;
    notification.android.visibility = visibility;
    notification.android.importance = importance;

    // TODO Improve more interaction here
    // https://notifee.app/react-native/docs/android/interaction#simple-behaviour
    notification.android.pressAction = {
      id: 'default',
    };

    await notifee.displayNotification(notification);
  }
};
