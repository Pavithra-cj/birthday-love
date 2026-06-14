import React from "react";
import Flower from "./Flower";

const Bouquet = () => {
  return (
    <div className="flex justify-center items-end gap-6 mt-10 flex-wrap">
      <Flower color="bg-pink-400" />
      <Flower color="bg-rose-400" />
      <Flower color="bg-purple-400" />
      <Flower color="bg-yellow-400" />
      <Flower color="bg-red-400" />
      <Flower color="bg-pink-300" />
    </div>
  );
};

export default Bouquet;
