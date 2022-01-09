import React from 'react'

const CharacterComponent = ({data}) => {
    console.log(data);
    const name = data.name || data.aliases
    return (
        <div>
            <h1>Available data for {name}-</h1>
            {data.aliases && data.name?<p>{name}'s aliase is {data.aliases}</p>:null}
            {data.born?<p>{name} was born in {data.born}</p>:null}
            {data.gender?<p>{name}'s gender is {data.gender}</p>:null}
            {data.mother?<p>{name}'s mother is {data.mother}</p>:null}
            {data.father?<p>{name}'s father is {data.father}</p>:null}
            {data.spouse?<p>{name}'s spouse is {data.spouse}</p>:null}
            {data.died?<p>{name} died in {data.died}</p>:null}
            {data.playedBy?<p>{name} is played by {data.playedBy}</p>:null}
            {data.tvSeries?<p>{name} was in {data.tvSeries.map((item)=><span>{item} </span>)}</p>:null}
           
            {data.culture?<p>{name}'s culture was {data.culture}</p>:null}
        </div>
    )
}

export default CharacterComponent
