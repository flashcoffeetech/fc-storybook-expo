import {AndroidStyle, Notification} from '@notifee/react-native';
/**
 This function convert from MoEngage Push Notification Data into Notification
*/
export const notificationConverter = (payload: any): Notification => {
  const _notification: Notification = {};

  _notification.data = payload.data;

  _notification.title = payload.data.gcm_title;
  _notification.body = payload.data.gcm_alert;
  if (payload.data.gcm_subtext !== undefined) {
    _notification.subtitle = payload.data.gcm_subtext;
  }

  _notification.android = {
    channelId: payload.data.moe_channel_id,
  };

  // If has image
  if (payload.data.gcm_image_url !== undefined) {
    _notification.android.style = {
      type: AndroidStyle.BIGPICTURE,
      picture: payload.data.gcm_image_url,
    };
  }

  return _notification;
};
