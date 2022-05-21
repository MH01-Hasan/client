import React, { useEffect, useState } from "react";

const Yeezy_350_v2 = () => {
  const [Yeezy_350_v2, setYeezy_350_v2] = useState([]);
  console.log(Yeezy_350_v2);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const Yeezy_350_v2 = data?.filter(
          (Yeezy_350_v2) => Yeezy_350_v2?.Catagory === "Yeezy_350_v2"
        );
        setYeezy_350_v2(Yeezy_350_v2);
      });
  }, []);
  return <div></div>;
};

export default Yeezy_350_v2;
