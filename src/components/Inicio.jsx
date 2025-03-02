import React,{ useState, useEffect} from "react";
import Pokemon from "./Pokemon";

export default function Inicio(){
    const [ pok , setPok ] = useState()
    const [buscador, setBuscador ] = useState("")

    const input = (e) =>{
        setBuscador(e.target.value.toLowerCase())
    }

    useEffect(()=>{

        const getData = async ()=>{    
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${buscador}`);
                
                if (!response.ok) {
                    throw new Error(`No se encontro el Pokémon`);
                }

                const data = await response.json();
                setPok(data) 
            } catch (error) {
                // console.error(error)
                setPok(null)
            }
        }

        // si escribio algo
        if(buscador){
            getData()
        }
    },[buscador])

    return(<>   
        <section>
            <h2>Buscador de la PokeApi</h2>
            <input type="text" value={buscador} name="buscador" onChange={input} />
            {(pok)?
            (<Pokemon dataPok={pok}></Pokemon>):
            (<span id="span_msg"> {(buscador)?('¡No se encontro Pokemon!'):('')} </span>)}    
        </section>
    </>)
}
