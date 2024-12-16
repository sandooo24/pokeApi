import React,{ useState, useEffect} from "react";
import Carta from "./Carta";

export default function Inicio(){
    const [ pok , setPok ] = useState()
    const [buscador, setBuscador ] = useState("")

    const input = (e) =>{
        setBuscador(e.target.value)
    }

    useEffect(()=>{

        const getData = async ()=>{    
            const url = `https://pokeapi.co/api/v2/pokemon/${buscador}`
            const respose = await fetch(url);

            if(respose.status!=200){
                return
            }
            const data = await respose.json();
            setPok(data) 
        }
        if(buscador){
            getData()
        }
        
    },[buscador])

    return(<>   
        <div className="box">
            <h2>Buscador de PokeApi</h2>
            <input type="text" value={buscador} name="buscador" onChange={input} />
            {(pok)?(<Carta dataPok={pok}></Carta>):(<span> . . .</span>)}    
        </div>
    </>)
}