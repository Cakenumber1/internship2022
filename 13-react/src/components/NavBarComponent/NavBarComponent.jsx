import { useCallback, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Modal } from '@mui/material';
import LoginComponent from '../LoginComponent/LoginComponent';

const pages = ['Smth', 'Smth2'];

function NavBarComponent() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState('')

  const handleOpenNavMenu = useCallback((event) => {
    setAnchorElNav(event.currentTarget)
  }, [])

  const handleOpenUserMenu = useCallback((event) => {
    setAnchorElUser(event.currentTarget)
  }, [])

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null)
  }, [])

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null)
  }, [])

  const handleLogin = (username) => {
    setUser(username)
    setLoggedIn(true)
  }
  const handleLogout = () => {
    setLoggedIn(false)
    setOpenModal(false)
  }
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  if (loggedIn) {
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
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {xs: 'block', md: 'none'},
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{color: 'red', width: '100px', m: 0}}>{page}</Typography>
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
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleLogout}>
                  <Typography
                    textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
  } else {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
            >
              Blog App
            </Typography>
            <Button onClick={() => {
              handleOpenModal();
              handleCloseUserMenu()
            }} color="inherit">Login</Button>
          </Toolbar>
        </Container>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              p: 4
            }}
          >
            <Typography id="modal-modal-title" variant="h6">
              Login
            </Typography>
            <LoginComponent handleLogin={handleLogin}/>
          </Box>
        </Modal>
      </AppBar>
    );
  }
}

export default NavBarComponent;
