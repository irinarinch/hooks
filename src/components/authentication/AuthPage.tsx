import NavbarEl from "./NavbarEl";
import News from "./News";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import useAuthorizationData from "../../hooks/useAuthorizationData";
import "bootstrap/dist/css/bootstrap.min.css";

interface IAuthPageProps {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const AuthPage = ({ token, setToken }: IAuthPageProps) => {
  const { data, error } = useAuthorizationData(
    import.meta.env.VITE_USERPROFILE_URL,
    token
  );

  localStorage.setItem("userProfile", JSON.stringify(data));

  const currentUser = JSON.parse(localStorage.getItem("userProfile") || "{}");

  const logout = () => {
    setToken("");
    localStorage.clear();
  };

  if (error === 401) {
    logout();
  }

  return (
    <>
      <NavbarEl>
        Hello, {currentUser.name}
        <Image src={currentUser.avatar} roundedCircle />
        <Button variant="outline-danger" onClick={logout}>
          Logout
        </Button>
      </NavbarEl>
      <News token={token} />
    </>
  );
};

export default AuthPage;