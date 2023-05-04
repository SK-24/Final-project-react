import React from 'react';
import { Link } from "react-router-dom";

const Logged = () => {
    return(
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>Explore more <span className='purple'>Books</span></h2>
                    <Link to="/books">
                        <button className='btn'>Explore Books</button>
                        <iframe src="https://calendar.google.com/calendar/u/0?cid=MDU4MDU5MTQzYjFjNmNkYWM3ZmM5MjZiY2E1OTY5ZTdlMzc3NDJhMGExM2Y1YTgyNWU0OGIzYjhhZDBiMDkxNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Logged;