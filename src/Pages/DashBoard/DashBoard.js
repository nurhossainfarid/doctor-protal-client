import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    <h2 className='text-8xl text-secondary font-bold'>DashBoard</h2>
                <Outlet/>
                
                </div> 
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appointments</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li><Link to="/dashboard/history">My History</Link></li>
                    <li><Link to="/dashboard/users">All Users</Link></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashBoard;