import React from 'react'

const HouseComponent = ({data}) => {
    console.log(data);
    return (
        <div>
            <h1>
                Available data for {data.name}-
            </h1>
            {data.region?<p>{data.name} belonged to the {data.region} region</p>:null}
            {data.coatOfArms?<p>{data.name} had coat of arms of {data.coatOfArms} </p>:null}
            {data.founded?<p>{data.name} was founded {data.founded} </p>:null}
            {data.words?<p>{data.name}'s words were '{data.words}' </p>:null}
        </div>
    )
}

export default HouseComponent
