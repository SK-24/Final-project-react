import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from "./ui/Highlight";

const Highlights = () => {
    return(
        <section id="highlights" >
        <div className="container">
            <div className="row">
                <h2 className="section__title">What we <span className='purple--d'>do?</span></h2>
                <div className="highlight__wrapper">
                    <Highlight 
                    icon={<FontAwesomeIcon icon="bolt" />} 
                    title="Go the extra mile" 
                    para="..." />
                    <Highlight 
                    icon={<FontAwesomeIcon icon="book-open" />} 
                    title="Teach and Support" 
                    para="..." />
                    <Highlight 
                    icon={<FontAwesomeIcon icon="tags" />} 
                    title="Provide excellent customer service" 
                    para="..." />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Highlights;