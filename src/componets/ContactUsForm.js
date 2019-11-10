import React, { Component } from 'react'

import '../css/ContactUsForm.css';


export default class MainDiv extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fields: {},
            errors: {},
            isChecked: false,
        }
    }
    toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //FirstName
        if(!fields["firstname"]){
           formIsValid = false;
           errors["firstname"] = "Cannot be empty";
        }

        if(typeof fields["firstname"] !== "undefined"){
           if(!fields["firstname"].match(/[a-zA-Z]+/g)){
              formIsValid = false;
              errors["firstname"] = "Only letters";
           }        
        }
        
        //LastName
        if(!fields["lastname"]){
           formIsValid = false;
           errors["lastname"] = "Cannot be empty";
        }

        if(typeof fields["lastname"] !== "undefined"){
           if(!fields["lastname"].match(/[a-zA-Z]+/g)){
              formIsValid = false;
              errors["lastname"] = "Only letters";
           }        
        }

        if(!fields["subject"]){
            formIsValid = false;
            errors["subject"] = "Cannot be empty";
        }

       //Message
       if(!fields["message"]){
           formIsValid = false;
           errors["message"] = "Cannot be empty";
        }

        //Checkbox
        if(!this.state.isChecked){
            formIsValid=false;
            errors["checkbox"] ="You must accept the terms and conditions before sending your message."
        }
       this.setState({errors: errors});
       return formIsValid;
   }
   contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
            var link = "mailto:me@example.com"
                + "?cc="
                + "&subject=" +this.state.fields["firstname"] + " " + this.state.fields["lastname"] + " " + this.state.fields["subject"]
                + "&body=" + this.state.fields["message"] ;

            window.location.href = link;
        }
    }
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    render() {
        return (
            <div className="form">
                <div className="form-margin">
                    <div role="form" className="form-margin-container">
                        <form method="post" encType="text/plain" onSubmit= {this.contactSubmit.bind(this)}>
                            <div className="form-row" >
                                <div className="form-firstcol">
                                    <div style={{animationDelay: "1.5s"}} className="form-col-data">
                                        <span>
                                            <input  type="text" name="FirstName" placeholder="Your firstname" onChange={this.handleChange.bind(this, "firstname")} value={this.state.fields["firstname"]}/>
                                            <span className="alert">{this.state.errors["firstname"]}</span>
                                        </span>
                                    </div>
                                    <div  style={{animationDelay: "1.7s"}} className="form-col-data">
                                        <span>
                                            <input type="text"  placeholder="Your lastname" name="LastName"  onChange={this.handleChange.bind(this, "lastname")} value={this.state.fields["lastname"]}/>
                                            <span className="alert">{this.state.errors["lastname"]}</span>
                                        </span>
                                    </div>
                                    <div  style={{animationDelay: "1.9s"}}  className="form-col-data">
                                        <span>
                                            <input type="text" name="subject" placeholder="Subject" onChange={this.handleChange.bind(this, "subject")} value={this.state.fields["subject"]}/>
                                            <span className="alert">{this.state.errors["subject"]}</span>
                                        </span>
                                    </div>
                                </div>
                                <div style={{opacity:"1",marginTop:"0"}} className="form-secondcol">
                                    <div style={{animationDelay: "2.1s"}} className="form-col-data">
                                        <span>
                                            <textarea name="message" placeholder="Talk to us" onChange={this.handleChange.bind(this, "message")}>{this.state.fields["message"]}</textarea>
                                            <span className="textarea-alert">{this.state.errors["message"]}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row" >
                                <div  className="form-firstcol">
                                    <div style={{animationDelay: "2.3s"}} className="form-col-data">
                                        <span className="form-col-data-checkbox">
                                            <span>
                                                <input type="checkbox" name="checkbox" checked={this.state.isChecked} onChange={this.toggleChange}/>
                                            </span>
                                        </span>
                                        <div className="i-have-read">
                                            I have read and accept
                                            <a href="/en/privacy-policy">the privacy policy</a> 
                                        </div>
                                        <span  className="checkbox-alert">{this.state.errors["checkbox"]}</span>
                                    </div>
                                </div>
                                <div className="form-secondcol">
                                    <button  id="submit" value="Submit" className="form-button">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <p style={{animationDelay: "2.7s"}} className="info">
                        In compliance with the provisions of the current regulations on Protection of Personal Data, we inform you that your personal data will be treated by GS ESPAÑA SL, as the person responsible for processing for the purpose of managing information requests that arrive through web forms or social networks. Likewise, we inform you that except legal obligation or express consent on your part that Giats will not transfer your data to third parties.
                    </p>
                </div>
            </div>
        )
    }
}