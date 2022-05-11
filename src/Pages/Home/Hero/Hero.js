import React from "react";
import Chair from "../../../assets/images/chair.png"
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Hero = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Chair}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Start Here</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;