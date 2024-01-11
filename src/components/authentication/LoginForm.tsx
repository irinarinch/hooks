import { FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export interface IFormData {
  login: string;
  password: string;
}

interface IFormProps {
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  logIn: (formData: IFormData) => void;
  setMessage:  React.Dispatch<React.SetStateAction<string>>;
}

const LoginForm = ({ formData, setFormData, logIn, setMessage }: IFormProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessage('');
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value.trim(),
    }));
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    logIn(formData);

    setFormData({
      login: "",
      password: "",
    });
  };

  return (
    <Form className="d-flex" onSubmit={onSubmitHandler}>
      <Form.Control
        type="text"
        value={formData.login}
        name="login"
        placeholder="Username"
        className="me-2"
        onChange={onChangeHandler}
        required
      />
      <Form.Control
        type="password"
        value={formData.password}
        name="password"
        placeholder="Password"
        className="me-2"
        onChange={onChangeHandler}
        required
      />
      <Button variant="outline-success" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
