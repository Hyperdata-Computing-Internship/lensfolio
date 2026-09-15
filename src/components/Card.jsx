import React from 'react'

const Card = (props) => {
    return (
        <a href={props.elem.url}>
            <div className='h-40 w-44 overflow-hidden rounded-xl'>
                <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
            </div>
            <h2 className='font-bold text-lg'>{props.elem.author}</h2>
        </a>
    )
}

export default Card