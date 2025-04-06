import { LogoFace } from "../../../../common/LogoFace"

export const TitleSectionGenre = () => {
    return (
        <div className="font-dots w-3xl text-tertiary text-5xl 2xl:text-8xl [&_span]:text-secundary ">
            <h1 className=" 2xl:w-96 inline-flex items-baseline">
                <span className="2xl:mr-4"><LogoFace/></span> Ur
            </h1>
            <h1 className=" 2xl:ml-64">
                <span className="ml-28 md:ml-0">G</span>enres
            </h1>
        </div>
    )
}
