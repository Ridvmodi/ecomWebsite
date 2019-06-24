import React from 'react'
import Heading from '../Reuseable/Heading'

export default function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us" />
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/ridhavrm@gmail.com" method="POST">
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Your Name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="_replyto" id="email" placeholder="Your Email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="mobile" id="mobile" placeholder="Your Mobile" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <textarea type="text" name="descripion" id="descripion" placeholder="Your Message" className="form-control"></textarea>
                    </div>
                    <button text="submit" className="btn btn-warning btn-block">Submit</button>
                </form>
            </div>
        </section>
    )
}
