import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Link } from '@material-ui/core';

const CookieBanner = (props) => {
  const { message, linkText, linkUrl, buttonClasses, onAccept, onReject } = props;

  const [showBanner, setShowBanner] = useState(true);

  const handleAccept = () => {
    setShowBanner(false);
    onAccept();
  };

  const handleReject = () => {
    setShowBanner(false);
    onReject();
  };

  return (
    <div className={`bg-black-100 fixed bottom-0 left-0 right-0 z-50 py-3 px-4 md:py-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between ${showBanner ? 'opacity-100 transition-opacity' : 'opacity-0 transition-opacity duration-500 ease-out'}`}>
      <div className="flex items-center mb-2 md:mb-0">
        <Typography variant="body2" className="mr-2">{message}</Typography>
        {linkText && linkUrl && (
          <Link href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-primary">
            <Typography variant="body2">{linkText}</Typography>
          </Link>
        )}
      </div>
      <div className="flex items-center">
        <Button variant="contained" color="primary" className={buttonClasses} onClick={handleAccept}>
          Accept
        </Button>
        <div className="w-2"></div>
        <Button variant="contained" color="secondary" className="ml-2" onClick={handleReject}>
          Reject
        </Button>
      </div>
    </div>
  );
};

CookieBanner.propTypes = {
  message: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  buttonClasses: PropTypes.string,
  onAccept: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
};

export default CookieBanner;
