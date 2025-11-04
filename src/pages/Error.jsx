import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
    const navigate = useNavigate();

    useEffect(() => {
        // Runs when the component mounts
        const timer = setTimeout(() => {
            navigate("/films");
        }, 3000); // Redirect after 3 seconds
        
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-5xl font-extrabold text-red-500 drop-shadow-lg mb-4">
                Page not found
            </h1>
            <p className="text-gray-600 text-lg">
                Redirecting to the films page...
            </p>
        </div>
    );
}
