import React from "react";
import { LayoutDashboard, Users, ShoppingCart, Settings, LogOut } from "lucide-react";

export default function AdminDashboard() {
  return (
    <>
      <style>
        {`
          /* Universal Styles */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            margin: 0;
            padding: 0;
          }
          .dashboard-layout {
            display: flex;
            min-height: 100vh;
            background-color: #f3f4f6;
          }

          /* Sidebar */
          .sidebar {
            width: 256px;
            background-color: #ffffff;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease-in-out;
            transform: translateX(0);
          }
          @media (max-width: 768px) {
            .sidebar {
              transform: translateX(-100%);
              position: fixed;
              z-index: 50;
              height: 100%;
            }
          }
          .sidebar-header {
            padding: 1.5rem;
            font-weight: 700;
            font-size: 1.5rem;
            color: #1f2937;
            border-bottom: 1px solid #e5e7eb;
          }
          .sidebar-nav {
            flex: 1;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .sidebar-nav-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            color: #4b5563;
            background-color: transparent;
            border: none;
            cursor: pointer;
            text-align: left;
            transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          }
          .sidebar-nav-item:hover {
            background-color: #e5e7eb;
            color: #1f2937;
          }
          .sidebar-nav-item.active {
            background-color: #4f46e5;
            color: white;
            box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2), 0 2px 4px -1px rgba(79, 70, 229, 0.1);
          }

          /* Main Content */
          .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .topbar {
            height: 64px;
            background-color: #ffffff;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1.5rem;
          }
          .topbar-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f2937;
          }
          .logout-btn {
            padding: 0.5rem 1.25rem;
            background-color: #ef4444;
            color: white;
            font-weight: 500;
            border-radius: 0.75rem;
            box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);
            transition: background-color 0.2s ease, box-shadow 0.2s ease;
            border: none;
            cursor: pointer;
          }
          .logout-btn:hover {
            background-color: #dc2626;
            box-shadow: 0 4px 6px rgba(220, 38, 38, 0.4);
          }

          /* Content Section */
          .dashboard-content {
            flex: 1;
            padding: 1.5rem;
            display: grid;
            gap: 1.5rem;
            grid-template-columns: repeat(1, 1fr);
          }
          @media (min-width: 640px) {
            .dashboard-content {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .dashboard-content {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          /* Stats Card */
          .stats-card {
            background-color: #ffffff;
            padding: 1.5rem;
            border-radius: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .stats-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          .stats-card-label {
            color: #6b7280;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }
          .stats-card-value {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1f2937;
          }

          /* Added styles for a more modern look */
          .sidebar-nav-item svg {
            color: inherit; /* Inherits color from parent button */
          }
        `}
      </style>

      <div className="dashboard-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            Admin Panel
          </div>
          <nav className="sidebar-nav">
            <button className="sidebar-nav-item active">
              <LayoutDashboard size={20} /> Dashboard
            </button>
            <button className="sidebar-nav-item">
              <Users size={20} /> Employees
            </button>
            <button className="sidebar-nav-item">
              <ShoppingCart size={20} /> Orders
            </button>
            <button className="sidebar-nav-item">
              <Settings size={20} /> Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Topbar */}
          <header className="topbar">
            <h1 className="topbar-title">Dashboard</h1>
            <button className="logout-btn">
              <LogOut size={20} className="inline-block mr-2" /> Logout
            </button>
          </header>

          {/* Content */}
          <section className="dashboard-content">
            {/* Stats Cards */}
            <div className="stats-card">
              <h2 className="stats-card-label">Total Users</h2>
              <p className="stats-card-value">1,245</p>
            </div>

            <div className="stats-card">
              <h2 className="stats-card-label">Total Orders</h2>
              <p className="stats-card-value">320</p>
            </div>

            <div className="stats-card">
              <h2 className="stats-card-label">Total Revenue</h2>
              <p className="stats-card-value">₹85,000</p>
            </div>
            
            <div className="stats-card">
              <h2 className="stats-card-label">New Customers</h2>
              <p className="stats-card-value">45</p>
            </div>
            
            <div className="stats-card">
              <h2 className="stats-card-label">Pending Orders</h2>
              <p className="stats-card-value">12</p>
            </div>
            
            <div className="stats-card">
              <h2 className="stats-card-label">Top Product</h2>
              <p className="stats-card-value">Laptop Pro</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
