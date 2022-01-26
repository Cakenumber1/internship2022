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
import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {logoutAction} from '../../store/actions';
import {userSelector} from '../../store/selectors';


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
const sxBlogApp = {
  mr: 2,
  display: {xs: 'none', md: 'flex'},
};
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


function NavBarComponent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  console.log(user);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
    dispatch(logoutAction());
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
            sx={sxBlogApp}
          >
            Blog App
          </Typography>
          <Box sx={sxMenuIconM}>
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
                  <Typography textAlign="center"
                    sx={sxMenuItemM}
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
            sx={sxBlogAppM}
          >
            Blog App
          </Typography>
          <Box sx={sxMenuItem}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={sxMenuItemButton}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
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
