import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Icon } from '../Icon';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

const stringAvatar = (name: string) => {
  return {
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
};

export const Navbar = () => {
  // TODO: replace with true user data
  const name = 'Mauricio Brito';
  const isAuthenticated = false;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="!tw-bg-background tw-px-10 !tw-text-neutral-gray-100 tw-border-b tw-border-neutral-blue-100 tw-backdrop-blur-lg tw-shadow-none"
        position="static"
      >
        <Toolbar className="tw-flex tw-px-0 tw-justify-between">
          <Link to={ROUTES.HOME}>
            <Icon className="tw-text-primary" type="digital-house" />
          </Link>
          {!isAuthenticated ? (
            <Link to={ROUTES.REGISTER}>
              <Button variant="contained">Crear cuenta</Button>
            </Link>
          ) : (
            <div className="tw-flex tw-items-center tw-gap-x-2">
              <Avatar className="tw-bg-primary tw-rounded-xl" {...stringAvatar(name)} />
              Hola, {name}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};