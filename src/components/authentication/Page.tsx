import AuthPage from "./AuthPage";
import StartPage from "./StartPage";

import { useState } from "react";

const Page = () => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );

  return (
    <>
      {!token ? (
        <StartPage setToken={setToken} />
      ) : (
        <AuthPage token={token} setToken={setToken} />
      )}
    </>
  );
};

export default Page;