import * as Types from "../../../Types";
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Fetcher, { TOKEN_KEY } from "../ClientUtils/Fetcher";

const NewUser = (props: Types.NewUserCompProps) => {
  //! swap for production
  //@=============================================================================
  // const [password_A, setPassword_A] = useState<string>("");
  // const [password_B, setPassword_B] = useState<string>("");
  // const [username, setUsername] = useState<string>(``);
  //@======PRODUCTION ABOVE, DEV BELOW============================================
  const [password_A, setPassword_A] = useState<string>("1111111111");
  const [password_B, setPassword_B] = useState<string>("1111111111");
  const [username, setUsername] = useState<string>(`bigwow`);
  //@=============================================================================

  const nav = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      //* check if the user entered the password they meant to enter
      // if (password_A !== password_B) {
      //   setPassword_A("");
      //   setPassword_B("");
      //   throw new Error(`passwords do not match`);
      // }

      //* then check for password length
      // if (password_A.length < 8) {
      //   setPassword_A("");
      //   setPassword_B("");
      //   throw new Error(`passwords must be more than 8 characters long`);
      // }

      // Fetcher.POST("/auth/register", { username, password: password_A })
      //   .then((res) => {
      //     console.log({ res });
      //     localStorage.setItem(TOKEN_KEY, res);
      //     nav(`/lobby`);
      //   })
      //   .catch((error) => {
      //     console.log(`Login Error...\n`);
      //     console.error(error);
      //     alert(`Something went wrong, please try again: ${error.message}`);
      //   });
      nav("/landing");
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {}, []);
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="card bg-light shadow col-md-4">
          <div className="card-body d-flex flex-wrap justify-content-center">
            <h5 className="card-title text-center col-md-7">Choose a Username and password</h5>

            <input
              id="username"
              placeholder="username"
              type="text"
              value={username}
              className="form-control col-md-7 my-1"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              id="password_A"
              placeholder="password"
              type="password"
              value={password_A}
              className="form-control col-md-7 mb-1"
              onChange={(e) => setPassword_A(e.target.value)}
            />

            <input
              id="password_B"
              placeholder="confirm password"
              type="password"
              value={password_B}
              className="form-control col-md-7 mb-1"
              onChange={(e) => setPassword_B(e.target.value)}
            />

            <button className="btn btn-primary my-2 ms-2 col-md-6" type="button" onClick={(e) => handleLogin(e)}>
              Register and Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewUser;