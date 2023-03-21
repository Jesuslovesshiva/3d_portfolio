import React from 'react';
import { useCookies } from 'react-cookie';
import CookieBanner from 'react-cookie-banner';

const CookieBannerComponent = () => {
  const [cookies, setCookie] = useCookies(['my-website-cookies']);

  const handleAccept = () => {
    // Set the 'my-website-cookies' cookie to true
    setCookie('my-website-cookies', true, { path: '/' });

    // Load the Google Tag Manager script
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TZM2M2P');
  };

  return (
    <CookieBanner
      message="This website uses cookies to improve your experience."
      buttonMessage="Accept"
      onAccept={handleAccept}
      cookie="my-website-cookies"
    />
  );
};

export default CookieBannerComponent;