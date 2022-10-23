import React, { useState, useEffect } from "react";

const List = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function getUser() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      res.json().then((res) => {
        setLoading(true);
        setItems(res);
      });
      if (!res.ok) {
        throw new Error(console.log("API is not working"));
      }
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  if (error) {
    return <div>Error is in API</div>;
  } else if (!loading) {
    return <div>Loading....</div>;
  } else
    return (
      <>
        {items.map((item) => {
          return (
            <div key={item.id}>
              {item.name}
              <br />
              {item.username} <br />
              {item.email} <br />
              {item.address.zipcode}
              <br />
              {item.address.street}
              <br />
              {item.address.suite}
            </div>
          );
        })}
      </>
    );
};

export default List;
