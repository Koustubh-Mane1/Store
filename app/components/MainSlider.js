"use client";
import { Carousel } from "@material-tailwind/react";

export default function MainSlider() {
  return (
    <Carousel transition={{ duration: 2 }} className="pb-2">
      <img
        src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt7cf045d930d92b03/6478630d482b73cd35a79937/AC_Milan_23-24_kit_1.png?auto=webp&format=pjpg&width=3840&quality=60"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltedbb594d4632f1ee/64707e6bec52f7e7e23a454a/Borussia_Dortmund_2023-24_home_jersey.png?auto=webp&format=pjpg&width=1920&quality=60"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt687e11322c32db14/648ac30195bc353a268db563/Barcelona_2023-24_home_kit.png?auto=webp&format=pjpg&width=1920&quality=60"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
