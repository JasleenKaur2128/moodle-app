import React, { useState } from "react";
import data from "../../data/data.json";

function Cards() {
  const [users, setUsers] = useState(data);
  console.log(users)
  return (
    <section>
      <h4>Card List</h4>
      {users && users.map((user) => {
        return(
            <article key={user.id}>
                <img src={user.avatar} alt={user.id} />
                <h2>{user.first_name}</h2>
                <h3>{user.email}</h3>
            </article>
        )
      })}
    </section>
  );
}

export default Cards;
