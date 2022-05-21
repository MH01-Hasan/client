import React, { useEffect, useState } from "react";

const Wallet = () => {
  const [Wallet, setWallet] = useState([]);
  console.log(Wallet);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const Wallet = data?.filter((Wallet) => Wallet?.Catagory === "Wallet");
        setWallet(Wallet);
      });
  }, []);
  return <div></div>;
};

export default Wallet;
