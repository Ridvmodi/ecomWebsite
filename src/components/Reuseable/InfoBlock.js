import React from 'react'
import Heading from "./Heading";
import { Link } from 'gatsby'

export default function InfoBlock({ heading }) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={ heading } />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti incidunt facere quod perferendis praesentium quis deserunt facilis. Expedita in perferendis harum aliquam quas doloribus eos labore? Reprehenderit quas accusantium, inventore sunt fuga possimus assumenda nulla! Harum eius nemo excepturi porro possimus recusandae odio ullam omnis aliquid voluptatum alias deleniti dolorum ipsa ratione, expedita quod, delectus cupiditate quo! Dicta, laudantium consequuntur?</p>
                        <Link to="/about">
                            <button className="btn btn-warning btn-lg">
                                { heading }
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
