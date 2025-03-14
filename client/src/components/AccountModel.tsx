import { useRecoilValue } from "recoil";
import { Logout } from "../icons/Logout";
import { Auth } from "../routes/auth";
import { authState } from "../store/atoms/authState";

export function AccountModel() {
  const { logout } = Auth();
  const auth = useRecoilValue(authState);

  function handleLogOut() {
    logout();
  }
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg px-5 py-4 min-w-64 border border-gray-200">
        <div className="flex flex-col items-center mb-3">
          <div className="text-3xl bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mr-3">
            {auth.user?.username.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-800 mt-5">
              Welcome to Brain Cache,
            </div>
            <div className="text-blue-600 font-semibold">
              {auth.user?.username}
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-3"></div>

        <button
          className="flex items-center gap-2 text-gray-700 hover:text-red-600 hover:bg-red-50 w-full rounded-md py-2 px-2 transition-colors duration-150"
          onClick={handleLogOut}
        >
          <Logout />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}