import axios from "axios";
import { useEffect, useState } from "react";
import style from "./users.module.css";
import User from "./User";

export type TUser = {
  id: number;
  name: string;
  active: boolean;
};

interface IListProps {
  setActiveUser: React.Dispatch<React.SetStateAction<"" | TUser>>;
}

const List = ({ setActiveUser }: IListProps) => {
  const [list, setList] = useState<TUser[]>([]);
  const [fullList, setFullList] = useState<boolean>(false);
  const partOfList = list.slice(0, 3);

  const fetchData = async () => {
    const result = await axios(import.meta.env.VITE_LIST_URL);
    setList(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandler = (item: TUser) => {
    setActiveUser(item);
    list.forEach((i) => {
      i === item ? (i.active = true) : (i.active = false);
    });
  };

  const render = (currentList: TUser[]) => {
    return currentList.map((item) => (
      <User key={item.id} user={item} clickHandler={() => clickHandler(item)} />
    ));
  };

  const onClick = () => setFullList(true);

  return (
    <>
      <ul className={style.users}>
        {!fullList ? render(partOfList) : render(list)}
        {!fullList ? (
          <li className={style.user} onClick={onClick}>
            ...
          </li>
        ) : (
          false
        )}
      </ul>
    </>
  );
};

export default List;
