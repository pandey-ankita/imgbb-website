import { Route } from "react-router-dom";
import UploadPage from "../compoents/Upload/Upload";
import Home from "../pages/Home";
import LoginPage from "../compoents/Sign/Sign";
import Plugin from "../compoents/Plugin/Plugin";
import Api from "../compoents/Api/Api";
import TermsOfService from "../compoents/Terms/Terms";
import Contact from "../compoents/Contact/Contact";

function HomePageRoutes() {
  return (
    <>
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/plugin" element={<Plugin />} />
      <Route path="/api" element={<Api />} />
      <Route path="/term" element={<TermsOfService />} />
      <Route path="/contact" element={<Contact />} />
    </>
  );
}

export default HomePageRoutes;
