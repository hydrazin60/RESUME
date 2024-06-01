import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-900 text-white">
      <div className="flex justify-between items-center mx-auto p-3">
        <img
          src="logo.png"
          className="h-14 rounded-full  cursor-pointer "
          alt="logo"
          onClick={() => navigate("/")}
        />
        <span className="flex items-center justify-center space-x-2">
          <h1 className="font-bold font-cursive text-2xl">
            MY ........ RESUME
          </h1>
        </span>

        <ul className="flex gap-6">
          <li className="cursor-pointer" onClick={() => navigate("/project")}>
            Project
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/about")}>
            About
          </li>
          <li
            className="cursor-pointer"
            onClick={() => navigate("/contact-us")}
          >
            Contact-us
          </li>
        </ul>
      </div>
    </div>
  );
}
