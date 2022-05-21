import React, { useEffect, useState } from "react";

const Designers_Shoes = () => {
  const [Designers_Shoes, setDesigners_Shoes] = useState([]);
  console.log(Designers_Shoes);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const Designers_Shoes = data?.filter(
          (Designers_Shoes) => Designers_Shoes?.Catagory === "Designers_Shoes"
        );
        setDesigners_Shoes(Designers_Shoes);
      });
  }, []);
  return <div></div>;
};

export default Designers_Shoes;
