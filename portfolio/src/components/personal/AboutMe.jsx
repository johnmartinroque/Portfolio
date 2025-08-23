import React from "react";

function AboutMe() {
  return (
    <div className="flex flex-wrap text-center">
      <div className="w-full md:w-1/3 bg-green-50">
        <img
          class="h-auto max-w-lg mx-auto "
          src="https://a.espncdn.com/i/headshots/nba/players/full/1966.png"
          alt="image description"
        />
      </div>
      <div className="w-full md:w-2/3 bg-green-900">
        <h2>BYE</h2>
      </div>
    </div>
  );
}

export default AboutMe;
