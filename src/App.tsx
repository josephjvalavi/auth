import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import SignOutButton from "./components/signout";
import SignInButton from "./components/signin";
import WelcomeUser from "./components/getname";
import { Home } from "./components/home";
// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  return (
    <>
      <AuthenticatedTemplate>
        <Home />
        <WelcomeUser />
        <SignOutButton />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <SignInButton />
      </UnauthenticatedTemplate>
    </>
  );
}
export default App;
