import './App.css';
import React, { useState } from "react"
import Admin_Page from './component/admin/Admin_Page';
import Projects from './component/project/Projects';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Quick_task from './component/quicktask/Quick_task';
import Categories from './component/categories/categories';
import User from './component/users/user';
import Chats from './component/chats/chats';
import Setting from './component/Settings/setting';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './component/users/Menu';

function App() {

  const ProtectedRoute = ({ children }) => {
    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const user = storedUser;

    if (!user) {
      return <Navigate to="/" />;
    }

    return children;
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route
            path='/'
            element={<Admin_Page />}>
          </Route>
          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            }></Route>
          <Route
            path='/quicktask'
            element={
              <ProtectedRoute>
                <Quick_task />
              </ProtectedRoute>
            }></Route>
          <Route
            path='/categories'
            element={
              <ProtectedRoute>
                <Categories />
               </ProtectedRoute>
            }></Route>
          <Route
            path='/chats'
            element={
              // <ProtectedRoute>
                <Chats />
              // </ProtectedRoute>
            }></Route>
          <Route
            path='/user'
            element={
              // <ProtectedRoute>
                <User />
              // </ProtectedRoute>
            }></Route>
          <Route
            path='/Settings'
            element={
              // <ProtectedRoute>
                <Setting />
              // </ProtectedRoute>
            }></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
