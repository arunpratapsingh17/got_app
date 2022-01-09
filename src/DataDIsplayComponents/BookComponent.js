import React from 'react'

const BookComponent = ({data}) => {
    console.log(data);
    return (
        <div>
            <h1>
                Available data for {data.name}-
            </h1>
            <div>
                {data.name?(<div><p>{data.name} was written by {data?.authors.map((author)=><a>{author}</a>,)} and published by {data.publisher}.</p>
                <p>The book is based in {data.country} and it's ISBN code is {data.isbn}.</p>
                <p>The book is {data.mediaType} with {data.numberOfPages} pages.</p></div>) :null}
            </div>
        </div>
    )
}

export default BookComponent
