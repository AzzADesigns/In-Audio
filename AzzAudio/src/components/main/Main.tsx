import { OurGenres } from "./layaout-main/sectionGenres/OurGenres"
import { Text } from "./layaout-main/sectionText/Text"

export const Main = () => {
    return (
        <main className=" h-full flex  lg:mt-0 lg:pt-0 flex-center justify-start mb-96 w-full flex-center gap-96 ">
            <div className="w-full 2xl:h-96  flex justify-center">
                <Text/>
            </div>
            <div className="w-full bg-blue-600 h-full">
                <OurGenres/>
            </div>
        </main>
    )
}

//cambiar el h cuando agreges mas componentes
