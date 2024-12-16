import React from "react";
import './index.css'

export default function Carta(dataPok){
    const info=dataPok.dataPok
    console.log(info)
    return(<>
        <div className="carta-poke">
            <h2>{info.name}</h2>
            <img src={info.sprites.front_default} />
            <ul>
                {info.stats.map(item => {
                    return(<>
                        <li>
                            <span>{item.stat.name}</span>
                            {item.base_stat}
                        </li>
                    </>)
                })}
            </ul>
        </div>
    </>)
}