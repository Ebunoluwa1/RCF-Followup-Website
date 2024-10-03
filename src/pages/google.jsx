import  { useEffect } from 'react';
import './g.css';

const GoogleSignIn = () => {
  useEffect(() => {
    // Dynamically load the Google API script
    const loadGooglePlatform = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api:client.js';
      script.async = true;
      script.onload = initGoogleSignIn;
      document.body.appendChild(script);
    };

    const initGoogleSignIn = () => {
      window.gapi.load('auth2', () => {
        const auth2 = window.gapi.auth2.init({
          client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        attachSignin(document.getElementById('customBtn'));
      });
    };

    const attachSignin = (element) => {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.attachClickHandler(
        element,
        {},
        (googleUser) => {
          document.getElementById('name').innerText = `Signed in: ${googleUser.getBasicProfile().getName()}`;
        },
        (error) => {
          console.error(error);
        }
      );
    };

    loadGooglePlatform(); // Load the script when the component mounts
  }, []);

  return (
    <div>
      <div id="gSignInWrapper">

        {/* <span className="label">Sign in to your account using :</span> */}
        <div id="customBtn" className="customGPlusSignIn">
          <span className="icon"></span>
          <span className="buttonText">Google</span>
        </div>
      </div>
      <div id="name"></div>
    </div>
  );
};

export default GoogleSignIn;
