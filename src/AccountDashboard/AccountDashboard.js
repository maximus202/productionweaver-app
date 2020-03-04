import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import DashboardContent from '../DashboardContent/DashboardContent';

class AccountDashboard extends Component {
    render() {
        return (
            <>
                <NavBar />
                <DashboardContent />
                <Footer />
            </>
        )
    }
}

export default AccountDashboard;