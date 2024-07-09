import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        {user ? (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        ) : (
          <Button color="inherit" onClick={handleLogin}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
