import React from 'react';
import Header from '../common/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
           <Header></Header> 
           <Outlet></Outlet>
        </>
    );
};

export default Main;