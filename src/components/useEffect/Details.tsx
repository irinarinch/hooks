import { useEffect, useState } from "react";
import { TUser } from "./List";
import axios from "axios";
import UserInfo from "./UserInfo";

interface IDetailsProps {
  info: TUser | "";
}

export type TDetails = {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
};

const Details = ({ info }: IDetailsProps) => {
  const [data, setData] = useState<TDetails | "">("");
 
  useEffect(() => {
    (async () => {
      if (info === "") return;
      const result = await axios(
        import.meta.env.VITE_USER_DETAILS_URL + `${info.id}.json`
      );
  
      setData(result.data);
    })();
   
  }, [info]);

  return (
    <div>
      <UserInfo info={data} />
    </div>
  );
};

export default Details;
