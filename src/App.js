import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './Components/PageLayout';
import HomePage from './Pages/HomePage';
import AboutMe from './Pages/AboutMe';
import MyProjects from "./Pages/MyProjects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="myprojects" element={<MyProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}