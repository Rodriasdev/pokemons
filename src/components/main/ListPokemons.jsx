import { useState } from "react"
export const ListPokemons = () => {
    const [pokemons, pokemonsState] = useState([])


    const removePokemon = (e) => {
   
        for (let index = 0; index < pokemons.length; index++) {

            if (pokemons[index].name == e.target.name) {
                const updatedItems = pokemons.filter((item, i) => i !== index);
                pokemonsState(updatedItems);
            }
        }

    }

    const ListarPokemons = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await response.json()
        pokemonsState(data.results)
    }
    return(
        <div className="container text-center border border-4 mt-3 rounded bg-dark">
            <button onClick={ListarPokemons} className="btn btn-outline-success mt-1 text-end">Listar</button>
            <div className="row mt-4 text-white">
                { 
                    pokemons.map((pokemon) => (
                        <div key={pokemon.name} className="row">
                            <div className="col">
                                <p>{pokemon.name}</p>
                            </div>
                            <div className="col">
                                <button name={pokemon.name} onClick={removePokemon} className="btn btn-outline-danger">Eliminar</button>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    )
}