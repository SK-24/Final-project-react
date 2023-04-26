import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from "./ui/Highlight";

const Highlights = () => {
    return(
        <section id="highlights" >
        <div className="container">
            <div className="row">
                <h2 className="section__title">What we <span className='purple'>do?</span></h2>
                <div className="highlight__wrapper">
                    <Highlight 
                    icon={<FontAwesomeIcon icon="bolt" />} 
                    title="Easy and Quick" 
                    para="get access to tthe book u pourchased online" />
                    <Highlight 
                    icon={<FontAwesomeIcon icon="book-open" />} 
                    title="10k Books" 
                    para="library has ur fav books" />
                    <Highlight 
                    icon={<FontAwesomeIcon icon="tags" />} 
                    title="Affordable" 
                    para="get urself cheap books" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Highlights;