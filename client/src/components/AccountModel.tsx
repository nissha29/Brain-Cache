import { Logout } from "../icons/Logout";

export function AccountModel() {
  return (
    <div className="bg-white rounded-lg shadow-md px-5 py-4 min-w-64 border border-gray-100">
      <div className="flex items-center mb-3">
        <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
          U
        </div>
        <div className="flex-1">
          <div className="font-medium text-gray-800">
            Welcome to Brain Cache,
          </div>
          <div className="text-blue-600 font-semibold">
            User
          </div>
        </div>
      </div>
      
      <div className="border-b border-gray-200 mb-3"></div>
      
      <button 
        className="flex items-center gap-2 text-gray-700 hover:text-red-600 hover:bg-red-50 w-full rounded-md py-2 px-2 transition-colors duration-150"
        onClick={() => console.log("Logging out...")}
      >
        <Logout /> 
        <span className="font-medium">Logout</span>
      </button>
    </div>
  );
}