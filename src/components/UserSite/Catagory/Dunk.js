import React, { useEffect, useState } from "react";

const Dunk = () => {
  const [Dunk, setDunk] = useState([]);
  console.log(Dunk);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const Dunk = data?.filter((Dunk) => Dunk?.Catagory === "Dunk");
        setDunk(Dunk);
      });
  }, []);
  return <div></div>;
};

export default Dunk;
