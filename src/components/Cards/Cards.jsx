import React, { useState } from "react";
import data from "../../data/data.json";
import "./Cards.scss";

function Cards() {
  const [users, setUsers] = useState(data);
  console.log(users);
  return (
    <section className="cards-container">
      {users &&
        users.map((user) => {
          return (
            <article key={user.id} className="card">
              <img src={user.avatar} alt={user.id} className="card__img" />
              <div className="card__info">
                <h2 className="card__title">{user.first_name}</h2>
                <h3 className="card__email">{user.email}</h3>
              </div>
            </article>
          );
        })}
    </section>
  );
}

export default Cards;
