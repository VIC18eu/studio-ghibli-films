export default function Card({ title, img, description, onClick }) {
    return (
        <div
            className="bg-[#1b1b1b] rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-transform transform duration-300 border border-blue-200 cursor-pointer flex flex-col"
            onClick={onClick}
        >
            {img && (
                <img
                    src={img}
                    alt={title}
                    className="w-full h-72 object-cover rounded-t-xl"
                />
            )}
            <div className="p-4 flex-1 flex flex-col justify-between">
                <h2 className="text-xl font-bold text-blue-200 mb-2 drop-shadow-md">
                    {title}
                </h2>
                <p className="text-gray-300 text-sm line-clamp-4">
                    {description ? description : "No description available"}
                </p>
            </div>
        </div>
    );
}
