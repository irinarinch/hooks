import { TUser } from "./List";
import style from "./users.module.css";

interface IUserProps {
  user: TUser;
  clickHandler: () => void;
}

const User = ({ user, clickHandler }: IUserProps) => {
  const getClass = () => {    
    return user.active ? `${style.user} ${style.selected}` : style.user 
  }

  return (
    <li className={getClass()} onClick={clickHandler}>
      {user.name}
    </li>
  );   
};

export default User;
