import {FunctionComponent, useEffect, useState} from 'react';

import NotificationComponent
  from '../../components/NotificationComponent/NotificationComponent';
import dataNotifications from '../../fakeServer/notifications.json';

type message = {
  uuid: string
  author: string
  inner: string
}
type fetchNotificationAsw = {
  messages: message[]
}

const NotificationContainer
  : FunctionComponent<{fetchNotifications: Function}> =
  ({fetchNotifications}) =>{
    const [notifications, setNotifications] = useState([] as message[]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      fetchNotifications(dataNotifications).then((e :fetchNotificationAsw) => {
        setNotifications(e.messages);
        setLoading(false);
      });
    }, [fetchNotifications]);
    if (!loading) {
      return (
        <NotificationComponent notifications={notifications}/>
      );
    } else {
      return null;
    }
  };

export default NotificationContainer;
