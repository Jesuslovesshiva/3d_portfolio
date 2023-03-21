import React from 'react';
import { useCookies } from 'react-cookie';
import CookieBanner from 'react-cookie-banner';

const CookieBannerComponent = () => {
  const [cookies, setCookie] = useCookies(['3dportfolio-view-tracking-analytics-v1']);

  const handleAccept = () => {
    // Set the '3dportfolio-view-tracking-analytics' cookie to true
    setCookie('3dportfolio-view-tracking-analytics-v1', true, { path: '/' });

    // Load the Google Tag Manager script
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TZM2M2P');
  };

  // Clone the CookieBanner element and add a custom class
  const clonedElement = cloneWithProps(<CookieBanner />, { className: 'my-custom-class' });

  return (
    <>
      <CookieBanner
        message="This website uses cookies to improve your experience."
        buttonMessage="Accept"
        onAccept={handleAccept}
        cookie="3dportfolio-view-tracking-analytics-v1"
      />
      {clonedElement}
    </>
  );
};

export default CookieBannerComponent;