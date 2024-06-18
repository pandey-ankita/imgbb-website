import React from 'react';
import Navbar from './compoents/Navbar/Navbar';
import Page1 from './compoents/Page1/Page1';
import Bottom from './compoents/Bottom/Bottom';
import UploadPage from './compoents/Upload/Upload'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Main from './pages/Main.jsx';
import HomePageRoutes from './route/routes.jsx'
function App() {
  return (
    <>
    <Routes>
      <Route  element={<Main />} >
      {HomePageRoutes()}
      </Route>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/bottom" element={<Bottom />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
    </>
  );
}

export default App;

