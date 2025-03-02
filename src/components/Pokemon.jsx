import React from 'react'
import styles from '../css/pokemon.module.css'

export default function Pokemon(dataPok) {
    const info=dataPok.dataPok
    
    return(<>
        <div className={`${styles.cartaPoke} ${info.types[0].type.name}`}>
            <h2>{info.name}</h2>
            <img src={info.sprites.other.dream_world.front_default} />
            <div className={styles.type}>
                {info.types.map( col =>{
                    return(<span>{col.type.name}</span>)
                })}
            </div>
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
