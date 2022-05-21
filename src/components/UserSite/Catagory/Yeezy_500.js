import React, { useEffect, useState } from "react";

const Yeezy_500 = () => {
  const [Yeezy_500, setYeezy_500] = useState([]);
  console.log(Yeezy_500);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const Yeezy_500 = data?.filter(
          (Yeezy_500) => Yeezy_500?.Catagory === "Yeezy_500"
        );
        setYeezy_500(Yeezy_500);
      });
  }, []);
  return <div></div>;
};

export default Yeezy_500;
