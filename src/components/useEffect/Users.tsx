import List, { TUser } from "./List";
import Details from "./Details";
import { useState } from "react";

const Users = () => {
  const [activeUser, setActiveUser] = useState<TUser | "">("");
  
  return (
    <div className="list_container">
      <List setActiveUser={setActiveUser} />
      <Details info={activeUser} />      
    </div>
  );
};

export default Users;