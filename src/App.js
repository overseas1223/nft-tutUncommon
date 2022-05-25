import React from 'react';
import User from './pages/user';
import Admin_role from './pages/admin_role';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/admin" element={<Admin_role />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
