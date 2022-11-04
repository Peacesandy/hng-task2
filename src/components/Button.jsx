import React from 'react'

const Button = ({ item }) => {
    return (
        <a href={item.url}  className="btn" rel="noreferrer" id={item.linkID}>{item.name}</a>
    )
}

export default Button