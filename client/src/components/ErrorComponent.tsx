
interface ErrorComponentProps {
  errorMessage: string;
  retryAction?: () => void;
}

export const ErrorComponent = (props: ErrorComponentProps) => {
  return (
    <div className="flex flex-col items-center justify-center inset-0 fixed p-4">
      <div className="text-center">
        <div className="mb-3 text-red-500">
          <svg className="w-14 h-14 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-semibold text-gray-800">Error</h3>
        <p className="text-gray-700/80 text-xl">{props.errorMessage}</p>
        {props.retryAction && (
          <button 
            onClick={props.retryAction}
            className="px-3 py-1 mt-3 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};