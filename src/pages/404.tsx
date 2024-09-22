import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen justify-center items-center text-slate-200 bg-slate-900 ">
        <div className="flex flex-col animate-fadeup">
          <span className="text-[128px] font-bold tracking-wider text-center">
            404
          </span>
          <span className="text-5xl p-0">Not Found</span>
        </div>

        <div className="flex items-center justify-center py-20 animate-fadeup">
          <Link to={"/"} className="py-2 px-6 bg-slate-700 shadow-md rounded-md transition-all duration-300 hover:bg-slate-500" replace>
            GO BACK HOME
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
