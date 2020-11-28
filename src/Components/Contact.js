/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      // var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

            <div className="twelve columns contact-details">
                  <h4>Find Me Here: </h4>
                  <p className="address">
						   {/* <span>{name}</span><br /> */}
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
					   </p>
               
               </div>
               </div> 

            <div className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Email Me: </h4>
					   <p className="address">
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
				   </div>
               </div>
                
      </div>
   </section>
    );
  }
}

export default Contact;
