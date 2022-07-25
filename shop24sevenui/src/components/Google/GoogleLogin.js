// import React from "react";
// import './googleLogin.css';
// import { useGoogleLogin } from "react-google-login";
// import refreshTokenSetup from "./refreshTokenSetup";

// const clientId =
//   "201866770416-ghkppkc072o8uahgr5op6egpg75jvp3j.apps.googleusercontent.com";

// function GoogleLogin() {
//   const onSuccess = (res) => {
//     console.log("Login Success: currentUser:", res.profileObj);
//     refreshTokenSetup(res);
//   };
//   const onFailure = (res) => {
//     console.log("Login failed: res:", res);
//   };

//   const { signin } = useGoogleLogin({
//     onSuccess,
//     onFailure,
//     clientId,
//     isSignedIn: true,
//     accessType: "offline",
//   });
//   return (
//     <button onClick={signin} className="google-button">
//       <img src="images/google.png" alt="google" />
//       <span className="buttonText">Sign in with Google</span>
//     </button>
//   );
// }

// export default GoogleLogin;
