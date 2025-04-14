
export const Footer = () => {
  return (
    <footer className="flex justify-between w-full text-tertiary font-uniq mb-5">
        <div className="">
            <img
                src="Logo1.svg"
                alt=""
                className="w-[80%]"
            />
        </div>
        <div>
            <p>Develop: AzzADesigns</p>
            <p>Phone: 2236979758</p>
            <p>Gmail: walter.azariel.moreno</p>
        </div>
        <div>
            <p>Linkedin:{" "}
                <a 
                    href="https://www.linkedin.com/in/azariel-moreno-4267ba254/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline cursor-pointer hover:text-secundary"
                >Azariel Moreno</a>    
            </p> 
            <p>Github:{" "}
                <a 
                    href="https://github.com/AzzADesigns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline cursor-pointer hover:text-secundary"
                >AzzADesigns</a>    
            </p> 
            <a href="">Instragram: Azza More</a>
        </div>
    </footer>
  )
}
