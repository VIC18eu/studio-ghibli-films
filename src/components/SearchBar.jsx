export default function SearchBar({ value, onChange, placeholder }) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full p-3 rounded-md border border-gray-600 bg-[#1b1b1b] text-white focus:outline-none focus:border-yellow-400 transition"
        />
    );
}
