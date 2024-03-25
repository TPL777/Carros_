import iconLuxury from "../assets/icon-luxury.svg"

export default function Luxury() {
    return(
        <section className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
        <img src={iconLuxury} alt="ícone dos carros de luxo" className="mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
        <p className="font-Lexend mb-7 text-offwhite lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a className="font-Lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-darkgreen border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg" href="https://www.webmotors.com.br/carros-de-luxo"
        target="_blank">Ver mais</a>
      </section>
    )
}