import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import CookieBannerComponent from "./components/CookieBanner.jsx";
import { CookiesProvider } from 'react-cookie';


const App = () => {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <CookieBannerComponent message="We use cookies to improve user experience. By continuing to browse the website, you are agreeing to our use of cookies." 
              // linkText="Learn more" 
              linkUrl="https://example.com/cookies-policy"
              onAccept={() => {console.log("Cookies accepted")}}
              onReject={() => {console.log("Cookies rejected")}}
              />
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </CookiesProvider>
    </BrowserRouter>
  );
}
export default App;