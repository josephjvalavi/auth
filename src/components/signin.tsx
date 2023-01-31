import React from "react";

import { useMsal } from "@azure/msal-react";
function signInClickHandler(instance: any) {
  instance.loginRedirect();
}
function SignInButton() {
  const { instance } = useMsal();

  return (
    <div>
      <p>Please Sign In</p>
      <div className="col border-end d-flex justify-content-center align-items-center">
        <button onClick={() => signInClickHandler(instance)}>
          Sign In With Microsoft
        </button>
      </div>
    </div>
  );
}

export default SignInButton;
