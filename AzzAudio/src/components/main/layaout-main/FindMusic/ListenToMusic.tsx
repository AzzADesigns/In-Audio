import { Search } from "./sectionSearch/Search"


export const ListenToMusic = () => {
  return (
    <div className="w-full flex-center">
        <h1 className="text-2xl md:text-7xl 2xl:text-8xl font-dots text-tertiary bg-primary p-2"><span className="text-secundary">F</span>ind your favorite music</h1>
        <Search/>
        
    </div>
  )
}
