import React from "react";
import myimg from "../../assets/my/image.png";
export default function App() {
  return (
    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
      <img
        src={myimg}
        className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
        alt="Louvre"
      />
    </div>
  );
}
