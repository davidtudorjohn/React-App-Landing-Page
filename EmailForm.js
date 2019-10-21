import React from 'react';
import '../css/emailForm.css';
class EmailForm extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <form id="emailForm">
                <h1 id="subscribeHeading">
                    Subscribe for a chance to win your dream React app!
                </h1>
                <input
                type="email"
                placeholder="Enter your email"
                id="emailInput"
                required={true}
                >
                
                </input>
                <button id="subscribeBtn">
                    SUBSCRIBE
                </button>
                <br></br>
                <br></br>
                <label id="termsLabel">I agree to the Terms and Conditions 
                    <input
                    placeholder=""
                    id="agreeTerms"
                    type="checkbox"
                    required={true}
                    ></input>
                </label>
                <p></p>
                
            </form>
        )
    }
}
export default EmailForm;