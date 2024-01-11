import NavbarEl from "./NavbarEl";
import LoginForm, { IFormData } from "./LoginForm";

import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";

import style from "./authentication.module.css";

interface IStartPageProps {
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const StartPage = ({ setToken }: IStartPageProps) => {
  const [formData, setFormData] = useState<IFormData>({
    login: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const logIn = (formData: IFormData) => {
    axios
      .post(import.meta.env.VITE_LOGIN_URL, formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <>
      <NavbarEl>
        <span className={style.message}>{message}</span>
        <LoginForm
          formData={formData}
          setFormData={setFormData}
          logIn={logIn}
          setMessage={setMessage}
        />
      </NavbarEl>
      <Card className={style.card}>
        <Card.Body>
          <Card.Title className={style.title}>Neto Social</Card.Title>
          <Card.Subtitle className="mt-2">
            Facebook and VK killer.
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
};

export default StartPage;