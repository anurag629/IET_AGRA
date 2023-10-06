import { Box, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';

const Navbar = () => {
  const { access_token } = getToken();

  return (
    <Box className="mt-[64px]">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 overflow-hidden">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>IET AGRA</Typography>

          <div class="flex md:order-2">
            <Button
              component={NavLink}
              to='/'
              className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to='/contact'
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact
            </Button>


            {access_token ? (
              <Button
                component={NavLink}
                to='/dashboard'
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Dashboard
              </Button>
            ) : (
              <Button
                component={NavLink}
                to='/login'
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login/Registration
              </Button>
            )}



          </div>
        </div>
      </nav>
    </Box>
  );
}

export default Navbar;