import React, { useEffect, useState } from "react";

const Watch = () => {
  const [Watch, setWatch] = useState([]);
  console.log(Watch);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const Watch = data?.filter((Watch) => Watch?.Catagory === "Watch");
        setWatch(Watch);
      });
  }, []);
  return <div></div>;
};

export default Watch;
