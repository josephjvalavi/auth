import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
function signInClickHandler(instance:any) {
  instance.loginRedirect();
}
function signOutClickHandler(instance:any) {
  const logoutRequest = {
    account: instance.getAccountByHomeId(null),
    postLogoutRedirectUri: "http://localhost:3000",
  };
  instance.logoutRedirect(logoutRequest);
}

// SignInButton Component returns a button that invokes a popup login when clicked
function SignInButton() {
  // useMsal hook will return the PublicClientApplication instance you provided to MsalProvider
  const { instance } = useMsal();

  return <button onClick={() => signInClickHandler(instance)}>Sign In</button>;
}
function SignOutButton(){
  const{instance}=useMsal()
  return <button onClick={() => signOutClickHandler(instance)}>SignOut</button>;


}

function WelcomeUser() {
  const { accounts } = useMsal();
  var username:string = accounts[0].username;
  let name=username.split(".")

  return <p>Welcome, {name[0]}</p>;
}

// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  return (
    <>
      <AuthenticatedTemplate>
        <p>This will only render if a user is signed-in.</p>
        <WelcomeUser />
        <SignOutButton />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>This will only render if a user is not signed-in.</p>
        <SignInButton />
      </UnauthenticatedTemplate>
    </>
  );
}
export default App;