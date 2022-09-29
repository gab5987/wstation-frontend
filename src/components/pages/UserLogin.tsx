import "./UserLogin.scss";
import { useState } from 'react';
import { connectToDB } from "../../dbHandler";

const UserLogin = (props: any) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`The name you entered was: ${email} and ${pass}`);
        console.log(connectToDB.getAllValues)
    };

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label style={{color: "rgb(202, 202, 202)"}}> e-mail </label>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-container">
              <label style={{color: "rgb(202, 202, 202)"}}> Password </label>
              <input type="password" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );

    return (
        <div className="app">
          <div className="login-form">
            <h1 className="title" style={{color: 'rgb(202, 202, 202)'}}>Sign In</h1>
            {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
            {renderForm}
          </div>
        </div>
      );
}

export default UserLogin;