import React from 'react';
import '../css/footer.css';
function Footer (){
    return(
        <footer
        id="footer"
        >
            <p>©Copyright ProperApps 2019. All rights reserved.</p>
            <a className="footerLinks">Terms</a>
            <a className="footerLinks">Privacy</a>
        </footer>
    );
}
export default Footer;