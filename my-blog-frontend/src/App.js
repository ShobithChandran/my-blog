import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ArticlesList from './pages/Article/ArticlesList';
import ArticlePage from './pages/Article/ArticlePage';
import LoginPage from './pages/Authentication/LoginPage';
import SignupPage from './pages/Authentication/SignupPage';
import Error from './pages/error/Error';
import './App.css';
import Header from './pages/Header/Header';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<SignupPage />} exact/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} exact/>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/article-list" element={<ArticlesList />} />
            <Route path="/article/:name" element={<ArticlePage />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;