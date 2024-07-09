import React from 'react';
import AIModeling from './AIModeling';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>CryptoSentry Dashboard</h1>
                <nav>
                    <ul>
                        <li><a href="#stats">Stats</a></li>
                        <li><a href="#transactions">Transactions</a></li>
                        <li><a href="#modeling">AI Modeling</a></li>
                    </ul>
                </nav>
            </header>
            <section id="stats" className="dashboard-section">
                <h2>Statistics</h2>
                <div className="stats-content">
                    <div className="stat-item">
                        <h3>Total Supply</h3>
                        <p>1,000,000,000 CGT</p>
                    </div>
                    <div className="stat-item">
                        <h3>Market Cap</h3>
                        <p>$4,000,000,000</p>
                    </div>
                    <div className="stat-item">
                        <h3>Circulating Supply</h3>
                        <p>800,000,000 CGT</p>
                    </div>
                </div>
            </section>
            <section id="transactions" className="dashboard-section">
                <h2>Recent Transactions</h2>
                <div className="transactions-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Tx ID</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0xabcdef123456...</td>
                                <td>0x1234...5678</td>
                                <td>0xabcd...efgh</td>
                                <td>1000 CGT</td>
                                <td>2024-07-01</td>
                            </tr>
                            <tr>
                                <td>0x1234567890ab...</td>
                                <td>0xabcd...efgh</td>
                                <td>0x1234...5678</td>
                                <td>500 CGT</td>
                                <td>2024-07-02</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section id="modeling" className="dashboard-section">
                <AIModeling />
            </section>
        </div>
    );
};

export default Dashboard;
