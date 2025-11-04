import { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose, children }) {
    const [show, setShow] = useState(isOpen);

    useEffect(() => {
        if (isOpen) setShow(true);
    }, [isOpen]);

    const handleClose = () => {
        setShow(false);
        setTimeout(onClose, 300); // delay para animação
    };

    if (!isOpen && !show) return null;

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                }`}
        >
            <div
                className={`bg-[#1b1b1b] p-6 rounded-2xl max-w-3xl w-full relative shadow-2xl transform transition-transform duration-300 ${isOpen ? "scale-100" : "scale-90"
                    }`}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-blue-200 font-bold text-xl hover:text-blue-200 hover:scale-110 transition-transform"
                >
                    ×
                </button>
                <div className="max-h-[80vh] overflow-y-auto">{children}</div>
            </div>
        </div>
    );
}
