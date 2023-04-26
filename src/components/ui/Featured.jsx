import React from 'react';

const Featured = () => {
    return(
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        About <span className='purple'>Us</span> 
                    </h2>
                    <div className="books">
                        <div className="book">
                            <a href="">
                                <figure className='book__img--wrapper'>
                                    <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" />
                                </figure>
                            </a>
                            <div className="book__title">
                                <a href="/" className='book__title--link'>Atomic Habits
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
