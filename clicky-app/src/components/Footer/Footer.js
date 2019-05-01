import React from "react";
import "./footer.css";
import personalUse from "../../assets/images/personal-use.gif";

function Footer() {
    return (
        <footer id="sec-footer" className="container-fluid">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <img id="footer-img" className="img-fluid" src={personalUse} alt="Personal Use Only"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;