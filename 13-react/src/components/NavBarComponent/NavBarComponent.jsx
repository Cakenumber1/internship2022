import MenuIcon from '@mui/icons-material/Menu';
import {Modal} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useCallback, useState} from 'react';

import LoginComponent from '../LoginComponent/LoginComponent';

const pages = ['Smth', 'Smth2'];
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
let sxBlogApp;
const sxBlogAppM = {
  flexGrow: 1,
  display: {xs: 'flex', md: 'none'},
};
const sxMenuIconM = {
  flexGrow: 1,
  display: {xs: 'flex', md: 'none'},
};
const sxMenu = {
  flexGrow: 1,
  display: {xs: 'block', md: 'none'},
};
const sxMenuItemM = {
  color: 'red',
  width: '100px',
  m: 0,
};
const sxMenuItem = {
  flexGrow: 1,
  display: {xs: 'none', md: 'flex'},
};
const sxMenuItemButton = {
  my: 2,
  color: 'white',
  display: 'block',
  m: 0,
};
const sxUserMenu = {
  my: 2,
  color: 'white',
  display: 'block',
  m: 0,
};
const sxUserMenuMargin = {mt: '45px'};
const sxModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 4,
};


function NavBarComponent() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState('');

  const handleOpenNavMenu = useCallback((event) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleOpenUserMenu = useCallback((event) => {
    setAnchorElUser(event.currentTarget);
  }, []);

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
  }, []);

  const handleLogin = useCallback((username) => {
    setUser(username);
    setLoggedIn(true);
  }, []);
  const handleLogout = useCallback(() => {
    setLoggedIn(false);
    setOpenModal(false);
  }, []);
  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);
  loggedIn ? sxBlogApp = {mr: 2, display: {xs: 'none', md: 'flex'}} :
    sxBlogApp = {flexGrow: 1, mr: 2, display: {xs: 'none', md: 'flex'}};

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={sxBlogApp}
          >
            Blog App
          </Typography>
          {loggedIn && <Box sx={sxMenuIconM}>
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
              sx={sxMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={sxMenuItemM}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={sxBlogAppM}
          >
            Blog App
          </Typography>
          {!loggedIn &&
            <Button
              onClick={() => {
                handleOpenModal();
                handleCloseUserMenu();
              }}
              color="inherit">Login
            </Button>}
          {loggedIn && <Box sx={sxMenuItem}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={sxMenuItemButton}
              >
                {page}
              </Button>
            ))}
          </Box>}
          {loggedIn && <Box>
            <Button
              onClick={handleOpenUserMenu}
              sx={sxUserMenu}
            >
              {user}
            </Button>
            <Menu
              sx={sxUserMenuMargin}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={styleTR}
              keepMounted
              transformOrigin={styleTR}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogout}>
                <Typography
                  textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
      {!loggedIn && <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={sxModal}
        >
          <Typography id="modal-modal-title" variant="h6">
            Login
          </Typography>
          <LoginComponent handleLogin={handleLogin}/>
        </Box>
      </Modal>}
    </AppBar>
  );
}

export default NavBarComponent;
