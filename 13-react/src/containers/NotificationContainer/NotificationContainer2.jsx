import {useEffect, useState} from 'react';

import NotificationComponent
  from '../../components/NotificationComponent/NotificationComponent';
import dataNotifications from '../../fakeServer/notifications.json';

function NotificationContainer({fetchNotifications}) {
  const [notifications, setNotifications] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchNotifications(dataNotifications).then((e) => {
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
}

export default NotificationContainer;
