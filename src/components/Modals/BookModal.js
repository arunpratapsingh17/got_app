import React from 'react'
import Modal from "react-modal"
const BookModal = ({data}) => {
    return (
        <Modal isOpen={isOpen} shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true} onRequestClose={()=>setIsopen(false)} style={
            {
                overlay:{
                    backgroundColor:'#9898ac',
                },
                content : {
                    top                   : '50%',
                    left                  : '50%',
                    right                 : 'auto',
                    bottom                : 'auto',
                    marginRight           : '-50%',
                    transform             : 'translate(-50%, -50%)',
                    height:'400px',
                    width:'300px',
                    borderRadius:"20px",
                  }
            }
        }>
            <h1 style={{
                // marginLeft:"35%",
                // marginRight:"auto"
                textAlign:"center",
                border:"2px solid black",
                color:"black"
            }}>
                {data.name}
            </h1>
            <p>{data.name} was written by {data.authors.map((author)=><a>{author}</a>,)} and published by {data.publisher}.The book is based in {data.country} and it's ISBN code is {data.isbn}.The book is {data.mediaType} with {data.numberOfPages} pages.</p>
        </Modal>
    )
}

export default BookModal
