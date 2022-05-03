import { login } from "@services/api";
import { useState, useContext } from "react";
import LoginContext from "@contexts/LoginContext";

function LoginForm({ isShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setCurrentUser } = useContext(LoginContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await login({ username, password });
      setCurrentUser(username);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div
      className={`${
        !isShowLogin ? "active" : ""
      } show z-50 border-green-400 dark:border-yellow-400 border-2 rounded-3xl bg-white dark:bg-gray-800`}
    >
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text text-mada text-gray-800 px-1 dark:text-white">
              Please sign in:
            </h1>
            <label
              htmlFor="user"
              className="text-mada text-gray-800 p-1 dark:text-white"
            >
              Username
              <br />
              <input
                type="text"
                name="username"
                className="login-box text-mada border-1 hover:border-green-400 dark:hover:border-yellow-400"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
              <br />
            </label>
            <label
              htmlFor="password"
              className="text-mada text-gray-800 p-1 dark:text-white"
            >
              Password
              <br />
              <input
                type="password"
                name="password"
                className="login-box text-mada border-1 hover:border-green-400 dark:hover:border-yellow-400"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <br />
            </label>
            <input
              type="submit"
              value="LOGIN!"
              className="login-btn bg-green-400 dark:bg-yellow-400 p-1 px-2 rounded-3xl mt-3 text-atma font-bold"
              onClick={onSubmit}
            />
            <input
              type="submit"
              value="SIGN IN!"
              className="login-btn border-1 border-green-400 dark:border-yellow-400 text-green-400 dark:text-yellow-400 p-1 px-2 rounded-3xl ml-2 mt-2 text-atma font-bold"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
