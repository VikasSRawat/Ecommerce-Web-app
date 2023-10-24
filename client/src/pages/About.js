import React from "react";
import Layout from "./../components/layouts/Layout";
const About = () => {
    return (
        <Layout title={"About us - Ecommer app"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%", height: "30rem", mt: "1rem" }}
                        
                    />
                </div>
                <div className="col-md-5">
                    <p className="text-justify mt-5">

                        <h3>About US</h3>

                        Welcome to VeggieHub! We are your trusted partner in bringing the freshest and most flavorful produce right to your doorstep. Our mission is to make healthy eating convenient, accessible, and enjoyable for everyone.

                        <br /><h3>Our Story</h3>

                        Founded in 2023,  was born out of a passion for wholesome nutrition and a deep appreciation for the bounties of nature. Our journey began with a simple belief: that everyone should have easy access to farm-fresh vegetables and fruits that nurture both the body and the soul.

                        <br /><h3>What We Do</h3>

                        At VeggieHub, we've created a seamless online platform that connects local farmers and growers directly to your kitchen. We handpick the finest selection of seasonal produce, ensuring that each item is packed with flavor, nutrients, and  goodness from the earth.

                        <br />
                    </p>
                </div>

            </div>
        </Layout>
    );
};

export default About;