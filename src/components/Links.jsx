import React from 'react'
import { links } from "../links";
import Button from './Button';


const Links = () => {
    return (
        <section className="buttons">
            {links && links.map((item) => (
                <Button item={item} key={item.id} />
            ))}
        </section>
    )
}

export default Links