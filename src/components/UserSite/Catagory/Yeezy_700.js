import React, { useEffect, useState } from "react";

const Yeezy_700 = () => {
  const [Yeezy_700, setYeezy_700] = useState([]);
  console.log(Yeezy_700);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const Yeezy_700 = data?.filter(
          (Yeezy_700) => Yeezy_700?.Catagory === "Yeezy_700"
        );
        setYeezy_700(Yeezy_700);
      });
  }, []);
  return <div></div>;
};

export default Yeezy_700;
