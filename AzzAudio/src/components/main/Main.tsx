import { OurGenres } from "./layaout-main/sectionGenres/OurGenres"
import { Text } from "./layaout-main/sectionText/Text"

export const Main = () => {
    return (
        <main className=" h-full flex bg-primary lg:mt-0 lg:pt-0 flex-center 2xl:h-96 mb-96 w-full flex-center  ">
            <div className="w-full  2xl:h-96  flex justify-center">
                <Text/>
            </div>
            <div>
                <OurGenres/>
            </div>
        </main>
    )
}

//cambiar el h cuando agreges mas componentes
