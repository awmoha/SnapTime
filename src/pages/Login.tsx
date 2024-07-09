import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { updateEmail, updatePassword, loginRequest } from '../redux/authSlice';
import { TextField, Button, Container, Typography } from '@mui/material';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, user, loading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(loginRequest());
  };

  useEffect(() => {
    if (user) {
      navigate('/tabell');
    }
  }, [user, navigate]);

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => dispatch(updatePassword(e.target.value))}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
          >
            Sign In
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </form>
      </div>
    </Container>
  );
};

export default Login;
