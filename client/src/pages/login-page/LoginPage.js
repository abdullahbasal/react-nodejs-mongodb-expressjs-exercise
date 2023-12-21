import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../components/user-context/UserContext";
import { API_URL } from "../../config";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="container home-page-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="col-12 footer">
            <div className="section background ">
              <div
                className="row gap-20 justify-content-center"
                style={{ marginBottom: "20px" }}
              >
                <form className="login" onSubmit={login}>
                  <h1>Login</h1>
                  <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(ev) => setUsername(ev.target.value)}
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                  <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    style={{ width: "100%", marginBottom: "10px" }}
                  />

                  <button
                    style={{
                      marginTop: "5px",
                      width: "100%",
                      marginBottom: "10px",
                      backgroundColor: "#F11A7B",
                      color: "white",
                    }}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
