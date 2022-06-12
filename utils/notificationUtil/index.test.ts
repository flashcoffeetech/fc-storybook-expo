import 'react-native';
import {onDisplayNotification} from '.';

it('onDisplayNotification works well', () => {
  const obj = {
    sentTime: 1606590806584,
    data: {
      moe_channel_id: 'moe_default_channel',
      gcm_activityName: 'com.flashcoffee.MainActivity',
      gcm_campaign_id: '000000000000000063766282_L_0',
      item_id: 'xyz',
      gcm_alert: 'some message',
      moe_cid_attr: '{"moe_campaign_id":"000000000000000063766282"}',
      gcm_title: 'MoEngage Push',
      gcm_actions:
        '[{"action_title":"Buy","action_id":"Buy","action_tag":"m_nav","screen":"com.flashcoffee.MainActivity","extras":{"item_id":"xyz123"}}]',
      FallBackFlagAndroid: 'false',
      gcm_notificationType: 'normal notification',
      gcm_subtext: 'some summary',
      gcm_image_url:
        'https://www.flash-coffee.com/wp-content/uploads/2020/03/Americano.jpg',
      push_from: 'moengage',
    },
    from: '377968063722',
    messageId: '0:1606590806613080%f88c8876a3e0c250',
    ttl: 129600,
    collapseKey: '000000000000000063766282_L_0',
  };

  onDisplayNotification(obj);
});
