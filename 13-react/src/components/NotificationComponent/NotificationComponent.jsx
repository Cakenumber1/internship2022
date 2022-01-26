import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import {useCallback, useState} from 'react';

const sNotification = {
  position: 'fixed',
  right: '20px',
  bottom: '10px',
};
const sxNotificationButton = {
  p: '12px 0',
  borderRadius: 35,
};
const sxPopper = {
  borderRadius: 5,
  marginRight: '10px',
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
const sPopperAuthor = {
  color: 'red',
  fontSize: '14px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '75px',
};
const sPopperText = {
  paddingLeft: '5px',
  fontSize: '12px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '120px',
};

function NotificationComponent({notifications}) {
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
          sx={sxPopper}
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
}

export default NotificationComponent;
