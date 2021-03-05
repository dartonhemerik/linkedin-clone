import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1614909621~hmac=1ac9036ce2547bf484a9c9e29dbd5e28'
          alt='LinkedIn Logo'
        />
        <div className='header__search'>
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notification' />
        <HeaderOption
          avatar='https://avatars.githubusercontent.com/u/73367214'
          title='Me'
        />
      </div>
    </div>
  );
}

export default Header;
