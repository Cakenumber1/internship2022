import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

function NotificationComponent({notifications}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (notifications) {
    return (
      <div style={{position: 'fixed', right: '10px', bottom: '10px'}}>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Badge badgeContent={notifications.length} color="primary">
            <MailIcon color="action"/>
          </Badge>
        </Button>
        <Menu
          MenuListProps={{
            disablePadding: true
          }}
          sx={{borderRadius: 5}}
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          {notifications.map(n => (
            <MenuItem
              key={n.uuid}
              sx={{
                display: 'flex',
                width: '200px',
                bgcolor: 'gray',
                p: 'none',
                overflow: 'hidden'
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
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  } else {
    return null
  }

}

export default NotificationComponent;

