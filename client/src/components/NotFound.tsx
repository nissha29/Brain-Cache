import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <div className="h-2 w-full bg-indigo-600 rounded-full my-6"></div>
                <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8">
                    The page you're looking for doesn't exist or has been moved to another URL.
                </p>
                <div className="flex justify-center items-center">
                    <Button
                        text="Back To Home"
                        size="lg"
                        variant="secondary"
                        onClick={() => {
                            navigate('/home')
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default NotFound;