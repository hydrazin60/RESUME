import React from "react";
import { useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md"; // Importing menu icon from Material Design Icons

export default function Header() {
  const navigate = useNavigate();
  const clickmenu = () => {
    console.log("hello world");
  };

  return (
    <>
      <div className="bg-zinc-900 text-white">
        <div className="flex justify-between items-center mx-auto p-3">
          <img
            src="logo.png"
            className="h-14 rounded-full  cursor-pointer "
            alt="logo"
            onClick={() => navigate("/")}
          />
          <span className="flex items-center justify-center space-x-2 ">
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
          <MdMenu className="menuicon" onClick={clickmenu} />
        </div>
      </div>
      <div className="flex justify-end mr-1">
  <div className="bg-zinc-700 h-56 w-64 rounded-b-3xl">
    <ul className="flex flex-col gap-0">
      <li
        className="cursor-pointer w-60 mt-3  text-xl  text-white p-4 rounded-t"
        onClick={() => navigate("/project")}
      >
        Project
      </li>
      <li
        className="cursor-pointer w-60 text-xl   text-white p-4"
        onClick={() => navigate("/about")}
      >
        About
      </li>
      <li
        className="cursor-pointer w-60  text-xl  text-white p-4 rounded-b"
        onClick={() => navigate("/contact-us")}
      >
        Contact-us
      </li>
    </ul>
  </div>
</div>

    </>
  );
}
