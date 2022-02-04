import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import {CSSProperties, FunctionComponent, useCallback, useState} from 'react';

const sNotification : CSSProperties = {
  position: 'fixed',
  right: '20px',
  bottom: '10px',
};
const sxNotificationButton = {
  p: '12px 0',
  borderRadius: 35,
};
const sxPopperBox = {
  'display': 'flex',
  'width': '200px',
  'bgcolor': 'gray',
  'p': 'none',
  'overflow': 'hidden',
  '&:hover': {
    backgroundColor: 'antiquewhite',
    opacity: [0.9, 0.8, 0.7],
    cursor: 'pointer',
  },
};
const sPopperAuthor : CSSProperties = {
  color: 'red',
  fontSize: '14px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '75px',
};
const sPopperText : CSSProperties = {
  paddingLeft: '5px',
  fontSize: '12px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '120px',
};
type message = {
  uuid: string
  author: string
  inner: string
}

const NotificationComponent
  : FunctionComponent<{notifications: message[]}> = ({notifications}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback((event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    }, [anchorEl]);


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    if (notifications) {
      return (
        <div style={sNotification}>
          <Button
            id={id}
            onClick={handleClick}
            sx={sxNotificationButton}
          >
            <Badge badgeContent={notifications.length} color="primary">
              <MailIcon color="action"/>
            </Badge>
          </Button>
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            placement="top-end"
          >
            {notifications.map((n) => (
              <Box
                key={n.uuid}
                sx={sxPopperBox}
              >
                <div style={sPopperAuthor}
                >От: {n.author}
                </div>
                <div style={sPopperText}
                >
                  {n.inner}
                </div>
              </Box>
            ))}
          </Popper>
        </div>
      );
    } else {
      return null;
    }
  };

export default NotificationComponent;
