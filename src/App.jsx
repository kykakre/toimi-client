import {useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainContainer from "./views/MainPage/MainContainer";
import AboutContainer from "./views/AboutCompany/AboutContainer";
import ContactsContainer from "./views/ContactsPage/ContactsContainer";
import 'antd/dist/antd.css';
import "./style/Style.scss";

function App() {


  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="" element={<MainContainer />} />
          <Route path="about" element={<AboutContainer />} />
          <Route path="contact" element={<ContactsContainer />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
