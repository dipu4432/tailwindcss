import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";

function App() {
  return (
    <>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img className="size-12 shrink-0" src="/img/vite.svg" alt="Vite Logo" />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            Vite
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            You have a new message!
          </p>
        </div>
      </div>
      <div className="min-h-screen grid place-content-center radial-blue">
          <div className="bg-emerald-500 w-52 h-52 rounded-full shadow-2xl grid place-content-center">
            <div className="bg-teal-300 w-32 h-32 rounded-full grid place-content-center">
              <div className="bg-green-300 w-16 h-16 rounded-full"></div>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
