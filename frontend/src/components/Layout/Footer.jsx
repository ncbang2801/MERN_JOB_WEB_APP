import React, { useContext } from 'react';
import { Context } from '../../main';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  const { isAuthorized } = useContext(Context);

  return (
    <footer className={isAuthorized ? 'footerShow' : 'footerHide '}>
      <div>&copy; All Rights Reserved By CodeWithZeeshu. </div>

      <div>
        <Link
          to={'https://www.facebook.com/nguyencongbangnoo1'}
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link
          to={'https://www.youtube.com/channel/UCmoHYOIR33hF79A2c0RWzVw'}
          target="_blank"
        >
          <FaYoutube />
        </Link>
        <Link
          to={'https://www.youtube.com/channel/UCmoHYOIR33hF79A2c0RWzVw'}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to={'https://www.instagram.com/_nc.bang/'} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
