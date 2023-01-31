import { useMsal } from '@azure/msal-react';
function WelcomeUser() {
    const { accounts } = useMsal();
    var username:string = accounts[0].username;
    let name=username.split(".")
  
    return <p>Welcome, {name[0]}</p>;
  }
  export default WelcomeUser