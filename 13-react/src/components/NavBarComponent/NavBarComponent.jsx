import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useCallback, useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {AuthenticationContext} from '../../context/authenticationContext';

const pages = ['feed'];
const styleBL = {
  vertical: 'bottom',
  horizontal: 'left',
};
const styleTL = {
  vertical: 'top',
  horizontal: 'left',
};
const styleTR = {
  vertical: 'top',
  horizontal: 'right',
};

function NavBarComponent() {
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user, setUser] = useContext(AuthenticationContext);

  const handleOpenNavMenu = useCallback((event) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleOpenUserMenu = useCallback((event) => {
    setAnchorElUser(event.currentTarget);
  }, []);

  const handleCloseNavMenu = useCallback((event) => {
    setAnchorElNav(null);
    history.push(`/${event.currentTarget.textContent}`);
  }, [history]);

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
    history.push('/');
  }, [history]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
          >
            Blog App
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={styleBL}
              keepMounted
              transformOrigin={styleTL}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                    sx={{color: 'red', width: '100px', m: 0}}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
          >
            Blog App
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'white', display: 'block', m: 0}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{flexGrow: 0}}>
            <Button
              onClick={handleOpenUserMenu}
              sx={{my: 2, color: 'white', display: 'block', m: 0}}
            >
              {user}
            </Button>
            <Menu
              sx={{mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={styleTR}
              keepMounted
              transformOrigin={styleTR}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Button textalign="center" onClick={handleLogout}>
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBarComponent;
