import React from "react";
import python from "../../static/python.png";
import fastapi from "../../static/fastapi.png";
import react from "../../static/react.png";
import redux from "../../static/redux.png";
import mongo from "../../static/mongo.png";
import tailwind from "../../static/tailwind.png";
import docker from "../../static/docker.png";
import caprover from "../../static/caprover.png";
import gitlab from "../../static/gitlab.png";

function Resources() {
  return (
    <div className="text-center h-min-[100vh] h-content">
      <h1 className="m-8 font-raleway text-gray-100 text-4xl">Resources</h1>
      <div className="grid grid-cols-3 gap-1 justify-items-center">
        <a
          href="https://www.python.org/"
          className="grid grid-rows-auto justify-items-center m-4 max-w-md rounded-xl shadow-md overflow-hidden bg-gray-700 hover:bg-gray-400 border border-gray-200"
        >
          <img src={python} alt="python" className="row-span-1 m-4 max-h-36" />
          <p className="font-raleway text-gray-200 row-span-1 m-4">
            Python was used to write the back-end portion of our code. That
            includes our pydantic models, unit tests, and any FastAPI code.
          </p>
        </a>
        <a
          href="https://fastapi.tiangolo.com/"
          className="grid grid-rows-auto justify-items-center m-4 max-w-md rounded-xl shadow-md overflow-hidden bg-gray-700 hover:bg-gray-400 border border-gray-200"
        >
          <img
            src={fastapi}
            alt="fastapi"
            className="row-span-1 m-4 max-h-36"
          />
          <p className="font-raleway text-gray-200 row-span-1 m-4">
            FastAPI was the web framework we used for building our application's
            back-end.
          </p>
        </a>
        <a
          href="https://react.dev/"
          className="grid grid-rows-auto justify-items-center m-4 max-w-md rounded-xl shadow-md overflow-hidden bg-gray-700 hover:bg-gray-400 border border-gray-200"
        >
          <img src={react} alt="react" className="row-span-1 m-4 max-h-36" />
          <p className="font-raleway text-gray-200 row-span-1 m-4">
            React was used to build our user interface via components.
          </p>
        </a>
        <a
          href="https://redux-toolkit.js.org/"
          className="grid grid-rows-auto justify-items-center m-4 max-w-md rounded-xl shadow-md overflow-hidden bg-gray-700 hover:bg-gray-400 border border-gray-200"
        >
          <img src={redux} alt="redux" className="row-span-1 m-4 max-h-36" />
          <p className="font-raleway text-gray-200 row-span-1 m-4">
            Redux Toolkit is the standard approach for writing Redux logic. We
            used this to store the whole state of our application inside a
            single store.
          </p>
        </a>
        <a
          href="https://www.mongodb.com/"
          className="grid grid-rows-auto justify-items-center m-4 max-w-md rounded-xl shadow-md overflow-hidden bg-gray-700 hover:bg-gray-400 border border-gray-200"
        >
          <img src={mongo} alt="mongo" className="row-span-1 m-4 max-h-36" />
          <p className="font-raleway text-gray-200 row-span-1 m-4">
            MongoDB is a document database that we used to store our
            application's data.
          </p>
        </a>
        <a
          href="https://tailwindcss.com/"
          className="grid grid-rows-auto justify-items-center m-4 max-w-md rounded-xl shadow-md overflow-hidden bg-gray-700 hover:bg-gray-400 border border-gray-200"
        >
          <img
            src={tailwind}
            alt="tailwind"
            className="row-span-1 m-4 max-h-36"
          />
          <p className="font-raleway text-gray-200 row-span-1 m-4">
            TailwindCSS is a utility-first CSS framework that we used to design
            the front-end portion of our application.
          </p>
        </a>
        <a
          href="https://www.docker.com/"
          className="grid grid-rows-auto justify-items-center m-4 max-w-md rounded-xl shadow-md overflow-hidden bg-gray-700 hover:bg-gray-400 border border-gray-200"
        >
          <img src={docker} alt="docker" className="row-span-1 m-4 max-h-36" />
          <p className="font-raleway text-gray-200 row-span-1 m-4">
            Docker was used in the development of our application to launch our
            application locally as we worked on it.
          </p>
        </a>
        <a
          href="https://caprover.com/"
          className="grid grid-rows-auto justify-items-center m-4 max-w-md rounded-xl shadow-md overflow-hidden bg-gray-700 hover:bg-gray-400 border border-gray-200"
        >
          <img
            src={caprover}
            alt="caprover"
            className="row-span-1 m-4 max-h-36"
          />
          <p className="font-raleway text-gray-200 row-span-1 m-4">
            CapRover is an app/database deployment and web server manager that
            we used in order to deploy our application.
          </p>
        </a>
        <a
          href="https://gitlab.com/"
          className="grid grid-rows-auto justify-items-center m-4 max-w-md rounded-xl shadow-md overflow-hidden bg-gray-700 hover:bg-gray-400 border border-gray-200"
        >
          <img src={gitlab} alt="gitlab" className="row-span-1 m-4 max-h-36" />
          <p className="font-raleway text-gray-200 row-span-1 m-4">
            GitLab is a DevSecOps platform that was used throughout the
            development of our application.
          </p>
        </a>
      </div>
    </div>
  );
}

export default Resources;
