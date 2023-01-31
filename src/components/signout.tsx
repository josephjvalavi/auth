import { useMsal } from '@azure/msal-react';

function signOutClickHandler(instance:any) {
    const logoutRequest = {
      account: instance.getAccountByHomeId(null),
      postLogoutRedirectUri: "http://localhost:3000",
    };
    instance.logoutRedirect(logoutRequest);
  }

  function SignOutButton(){
    const{instance}=useMsal()
    return <button onClick={() => signOutClickHandler(instance)}>SignOut</button>;
  
  
  }
  export default SignOutButton