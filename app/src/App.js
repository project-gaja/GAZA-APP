import React from "react";
import { Navigate, Route, Routes } from 'react-router';
import Login from './component/Login';
import Home from './component/Home';
import Join from './component/Join';
import PswordUpdate from './component/PswordUpdate';
import Mypage from './component/MyPage';

export default function App() {
  const userId = 'admin';
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/pswordUpdate' element={<PswordUpdate />} />
        <Route path='/mypage' element={<Mypage />} />
      </Routes>
    </>
  );
}