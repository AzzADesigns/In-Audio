import {genres} from "./data/gneres"

export const Carrusel = () => {
    return (
        <div className='flex-center h-[600px] w-full bg-red-900'>
            <ul className="flex">
                {genres.map((genre)=>(
                    <li key={genre.genre}>{genre.genre}</li>
                ))}
            </ul>
        </div>
    )
}
