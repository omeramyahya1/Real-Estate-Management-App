import { useState } from "react";

export const useToggleFav = () => {
  const [love, setLove] = useState(false);
  const [heart, setHeart] = useState("heart");

  const handleLove = () => {
    console.log("pressed");
    if (heart === "heart") {
      setHeart("heart-outline");
      setLove(!love);
      console.log(love);
    } else if (heart === "heart-outline") {
      setHeart("heart");
      setLove(!love);
      console.log(love);
    }
  };

  return {
    heart,
    handleLove,
  };
};
