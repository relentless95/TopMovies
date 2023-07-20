import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>TopMovies</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            laudantium veniam eum doloribus quasi doloremque reprehenderit esse
            aliquam nam, perferendis consequuntur nemo? Perferendis quisquam
            exercitationem vel velit aliquid. Asperiores, cupiditate.
          </p>
        </div>
        <div className="img-container">
          <img src={"/images/couchguy.svg"} alt="couchguy" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
