import { LogoFace } from "../../../../common/LogoFace"

export const TitleSectionGenre = () => {
    return (
        <div className="font-dots  w-3xl text-tertiary text-8xl [&_span]:text-secundary ">
            <h1 className="w-96 inline-flex items-baseline">
                <span className="mr-4"><LogoFace/></span> Ur
            </h1>
            <h1 className="ml-64">
                <span>G</span>enres
            </h1>
        </div>
    )
}
