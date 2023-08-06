import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';

const Navbar = () => {
  const { access_token } = getToken();

  return (
    <Box className="bg-black">
      <AppBar position="static" color="secondary" className="bg-black text-white">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>CODER COPS</Typography>

          <Button
            component={NavLink}
            to='/'
            className="text-white text-opacity-80 hover:text-opacity-100 px-4"
          >
            Home
          </Button>

          <Button
            component={NavLink}
            to='/contact'
            className="text-white text-opacity-80 hover:text-opacity-100 px-4"
          >
            Contact
          </Button>

          {access_token ? (
            <Button
              component={NavLink}
              to='/dashboard'
              className="text-white text-opacity-80 hover:text-opacity-100 px-4"
            >
              Dashboard
            </Button>
          ) : (
            <Button
              component={NavLink}
              to='/login'
              className="text-white text-opacity-80 hover:text-opacity-100 px-4"
            >
              Login/Registration
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
