import { LogoFace } from "../../../../common/LogoFace"

export const TitleSectionGenre = () => {
    return (
        <div className="font-dots 2xl:w-3xl p-4 bg-primary shadow-tertiary text-tertiary md:ml-auto text-4xl md:text-7xl 2xl:text-8xl [&_span]:text-secundary ">
            <h1 className="w-full  inline-flex items-baseline">
                <span className="mr-1 "><LogoFace/></span> Ur
            </h1>
            <h1 className=" ">
                <span className="ml-16 md:ml-28 2xl:ml-64">G</span>enres
            </h1>
        </div>
    )
}
 