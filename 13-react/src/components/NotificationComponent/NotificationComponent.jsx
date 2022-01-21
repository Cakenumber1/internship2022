import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { useCallback, useState } from 'react';

function NotificationComponent({notifications}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback((event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }, [])


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  if (notifications) {
    return (
      <div style={{position: 'fixed', right: '20px', bottom: '10px'}}>
        <Button
          id={id}
          onClick={handleClick}
          sx={{p: '12px 0', borderRadius: 35}}
        >
          <Badge badgeContent={notifications.length} color="primary">
            <MailIcon color="action"/>
          </Badge>
        </Button>
        <Popper
          sx={{borderRadius: 5, marginRight: '10px'}}
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement="top-end"
        >
          {notifications.map(n => (
            <Box
              key={n.uuid}
              sx={{
                display: 'flex',
                width: '200px',
                bgcolor: 'gray',
                p: 'none',
                overflow: 'hidden',
                '&:hover': {
                  backgroundColor: 'antiquewhite',
                  opacity: [0.9, 0.8, 0.7],
                  cursor: 'pointer'
                },
              }}
            >
              <div style={{
                color: 'red',
                fontSize: '14px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                width: '75px',
              }}
              >От: {n.author}
              </div>
              <div style={{
                paddingLeft: '5px',
                fontSize: '12px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                width: '120px',
              }}
              >
                {n.inner}
              </div>
            </Box>
          ))}
        </Popper>
      </div>
    );
  } else {
    return null
  }
}

export default NotificationComponent;
