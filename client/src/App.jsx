import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {Navbar} from "./components/Navbar.jsx";
import { Aftereffect } from "./pages/aftereffect.jsx";
import { Alightmotion } from "./pages/alightmotion.jsx";
import { Project } from "./pages/project.jsx";
import { Others } from "./pages/others.jsx";
import { RefundPolicy } from "./pages/security/refund-policy.jsx";
import { PrivacyPolicy } from "./pages/security/privacy-policy.jsx";
import { TermsAndConditions } from "./pages/security/terms-condition.jsx";
import { Signup } from "./pages/signup.jsx"
import { Login } from "./pages/login.jsx";
import { Error } from "./pages/error404.jsx"
import { Logout } from "./pages/logout.jsx";
import { PaymentSuccess } from "./pages/paymentSuccess.jsx";

const Layout = ({ children }) => {
  const location = useLocation();
  const noNavbarRoutes = ["/", '/login', '/signup', '/paymentsuccess',]; // Add paths where Navbar should not appear

  return (
    <div>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar text={'Welcome to our website'} />}
      <main>{children}</main>
    </div>
  );
};

const App = ()=>{

  return <>
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aftereffect" element={<Aftereffect />} />
        <Route path="/alightmotion" element={<Alightmotion />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/others" element={<Others />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<Error/>} />
      </Routes>
      </Layout>
    </BrowserRouter>
  </>
}

export default App