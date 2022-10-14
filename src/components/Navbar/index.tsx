import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Icon } from '../Icon';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { useUserInfo } from '../../hooks';

const stringAvatar = (name: string) => {
  return {
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
};

export const Navbar = ({ isAuthenticated = false }) => {
  const { user } = useUserInfo();
  const { firstName, lastName } = user;
  const fullName = `${firstName} ${lastName}`;
  const location = useLocation();
  const isLogin = location.pathname === ROUTES.LOGIN && !isAuthenticated;

  return (
    <div className="tw-w-full tw-fixed tw-z-50 print:tw-hidden">
      <AppBar
        className="tw-px-10 !tw-text-neutral-gray-100 tw-border-b tw-border-neutral-blue-100 tw-backdrop-blur tw-shadow-none"
        style={{ background: 'transparent' }}
      >
        <Toolbar className="tw-flex tw-px-0 tw-justify-between">
          <Link to={ROUTES.HOME}>
            <Icon className="tw-text-primary" type="digital-house" />
          </Link>
          {!isAuthenticated ? (
            <Link to={isLogin ? ROUTES.REGISTER : ROUTES.LOGIN}>
              <Button variant="contained">
                {isLogin ? 'Crear cuenta' : 'Iniciar Sesión'}
              </Button>
            </Link>
          ) : (
            <div className="tw-flex tw-items-center tw-gap-x-2">
              <Avatar
                className="tw-bg-primary tw-rounded-xl"
                {...stringAvatar(fullName)}
              />
              Hola, {fullName}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
