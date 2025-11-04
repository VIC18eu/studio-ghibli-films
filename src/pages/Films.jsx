import { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";

export default function Films() {
    const [films, setFilms] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedFilm, setSelectedFilm] = useState(null);

    useEffect(() => {
        fetch("https://ghibliapi.vercel.app/films")
            .then((res) => res.json())
            .then((data) => {
                setFilms(data);
                setFiltered(data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        setFiltered(
            films.filter(
                (film) =>
                    film.title.toLowerCase().includes(search.toLowerCase()) ||
                    film.director.toLowerCase().includes(search.toLowerCase()) ||
                    film.release_date.includes(search)
            )
        );
    }, [search, films]);

    if (loading)
        return (
            <p className="text-center mt-16 text-white text-xl font-medium animate-pulse">
                Loading Studio Ghibli Films...
            </p>
        );

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1c1c1c] to-[#2e2e2e] py-10 px-6">
            <h1 className="text-5xl font-extrabold mb-8 text-blue-200 text-center drop-shadow-lg">
                Studio Ghibli Films
            </h1>

            <div className="max-w-3xl mx-auto mb-10">
                <SearchBar
                    value={search}
                    onChange={setSearch}
                    placeholder="Search by title, director or year..."
                />
            </div>

            <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filtered.map((film) => (
                    <Card
                        key={film.id}
                        title={film.title}
                        img={film.movie_banner || film.image}
                        description={film.description}
                        onClick={() => setSelectedFilm(film)}
                        className="transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
                    />
                ))}
            </div>

            <Modal isOpen={!!selectedFilm} onClose={() => setSelectedFilm(null)}>
                {selectedFilm && (
                    <div className="text-white space-y-4">
                        <h2 className="text-3xl font-bold text-blue-200 border-b-2 border-blue-200 pb-2">
                            {selectedFilm.title}
                        </h2>
                        <img
                            src={selectedFilm.movie_banner || selectedFilm.image}
                            alt={selectedFilm.title}
                            className="w-full h-64 object-cover rounded-lg shadow-lg mt-2"
                        />
                        <p>
                            <span className="font-semibold text-blue-200">Director:</span>{" "}
                            {selectedFilm.director}
                        </p>
                        <p>
                            <span className="font-semibold text-blue-200">Producer:</span>{" "}
                            {selectedFilm.producer}
                        </p>
                        <p>
                            <span className="font-semibold text-blue-200">Release Date:</span>{" "}
                            {selectedFilm.release_date}
                        </p>
                        <p className="mt-2 text-gray-300">{selectedFilm.description}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
}
