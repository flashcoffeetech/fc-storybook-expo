import {onDisplayNotification} from '.';
import 'react-native';

it('onDisplayNotification works well for createChannel', async () => {
  const withNotification = {
    notification: {
      android: {
        channelId: null,
        badgeIconType: null,
        visibility: null,
        importance: null,
      },
    },
    channelId: 5,
  };
  const noNotification = {
    channelId: 5,
  };
  onDisplayNotification(withNotification);
  onDisplayNotification(noNotification);
});
