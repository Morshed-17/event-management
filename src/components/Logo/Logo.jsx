import React from 'react';
import logo from '../../assets/images/logo (1).png'

const Logo = () => {
    return (
        <div className='text-white flex items-center gap-3 '>
            <img className='w-11' src={logo} alt="" />
            <h2 className='font-bold text-3xl'>EventBay</h2>
        </div>
    );
};

export default Logo;