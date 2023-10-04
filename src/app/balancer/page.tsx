/** @format */
import React from "react";
import Balancer from "react-wrap-balancer";

export default function Page() {
  return (
    <div className="p-8 ">
      <p>4 oct</p>
      <section>
        <h2 className="text-2xl font-bold">
          This is my titlte - Lorem ipsum dolor sit amet. ❌
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          repudiandae nesciunt alias cupiditate ab pariatur numquam sunt
          similique culpa eveniet, incidunt unde minima, aperiam tempore cum
          molestias reprehenderit deserunt enim?
        </p>
      </section>
      {/* with balancer */}
      <Balancer>
        <section>
          <h2 className="text-2xl font-bold mt-8">
            This is my titlte - Lorem ipsum dolor sit amet.✅
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            repudiandae nesciunt alias cupiditate ab pariatur numquam sunt
            similique culpa eveniet, incidunt unde minima, aperiam tempore cum
            molestias reprehenderit deserunt enim?
          </p>
        </section>
      </Balancer>
    </div>
  );
}
