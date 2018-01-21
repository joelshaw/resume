import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

export default class Resume extends Component {
    render() {
        return (
            <div className="content-brick">
                <section className="resume-block">
                    <h4>January 2012 - Present</h4>
                    <h2>Dogwood Creative</h2>
                    <h3>Owner</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate asperiores omnis quibusdam officia nam! Officia reprehenderit quasi eius tempora aspernatur vel. Odio voluptatibus reiciendis dolorem laudantium suscipit optio non autem.</p>
                </section>

                <section className="resume-block">
                    <h4>June 2017 - Present</h4>
                    <h2>Capital One</h2>
                    <h3>Software Engineer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate asperiores omnis quibusdam officia nam! Officia reprehenderit quasi eius tempora aspernatur vel. Odio voluptatibus reiciendis dolorem laudantium suscipit optio non autem.</p>
                </section>

                <section className="resume-block">
                    <h4>July 2015 - March 2017</h4>
                    <h2>Raytheon</h2>
                    <h3>Web Developer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate asperiores omnis quibusdam officia nam! Officia reprehenderit quasi eius tempora aspernatur vel. Odio voluptatibus reiciendis dolorem laudantium suscipit optio non autem.</p>
                </section>

                <section className="resume-block">
                    <h4>November 2013 - March 2015</h4>
                    <h2>Capital One</h2>
                    <h3>User Interface Engineer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate asperiores omnis quibusdam officia nam! Officia reprehenderit quasi eius tempora aspernatur vel. Odio voluptatibus reiciendis dolorem laudantium suscipit optio non autem.</p>
                </section>

            </div>
        );
    }
}