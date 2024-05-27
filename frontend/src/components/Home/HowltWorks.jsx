import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { MdFindInPage } from 'react-icons/md';

const HowltWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How JobZee Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              porro non exercitationem cum et voluptatem?
            </p>
          </div>
          <div className="card">
            <MdFindInPage />
            <p>Find a Job/Post A Job</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              porro non exercitationem cum et voluptatem?
            </p>
          </div>
          <div className="card">
            <IoMdSend />
            <p>Apply For Job/Recruit Suitable Candidates</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              porro non exercitationem cum et voluptatem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowltWorks;
