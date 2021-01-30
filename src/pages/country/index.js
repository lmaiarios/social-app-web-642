import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './country.css'

function Country(){
    const { country } = useParams()
    const [info, setInfo] = useState(null)

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${country}`)
            .then(res => res.json())
            .then(data => data[0])
            .then(object => {
                setInfo({
                    name: object.name,
                    population: object.population,
                    flag: object.flag
                })
            })
    },[])

    return (
        <div className="country-container">
            { info && <>
                <img className="country-flag" width='200px' src={info.flag}/>
                <h2>{info.name}</h2>
                <h3>População: {info.population}</h3>
            </> }
        </div>
    )
}

export default Country