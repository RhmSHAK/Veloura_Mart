import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen mx-auto px-6 py-2 gap-6 flex flex-col bg-white">
            
             <Navbar></Navbar>
             <main >
                <Outlet />
             </main>
             <Footer></Footer>

        </div>
    );
};

export default MainLayout;