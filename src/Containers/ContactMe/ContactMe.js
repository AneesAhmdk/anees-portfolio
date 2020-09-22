import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
import './ContactMe.css'
import linkedinicon from '../../assets/linkedinicon.png'
import facebookicon from '../../assets/facebookicon.png'
import { Form, FormGroup} from 'reactstrap'
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import { ExternalLink } from 'react-external-link';


init("user_MCn3s62Hvh1KWoozSx8P2");

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, subject, message } = this.state
    let templateParams = {
      from_name: name,
      to_name: 'Anees',
      subject: subject,
      message: message,
     }
     let serviceID = 'service_n002llj';
     let templateID = 'template_a9yxt8j';
     let userID =  'user_MCn3s62Hvh1KWoozSx8P2'

     
     emailjs.send(serviceID, templateID, templateParams, userID)
     .then(response => {
       window.confirm("Your mail has been sent")
      }
      )
   .catch(error => {
    window.confirm("Sorry for the inconvenience! There's an error with the mail server. Please send an email to aneesahmdk@gmail.com")

   });
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <div>
        <NavigationBar/>
        <div className = "contactMe">
          <h1 className="p-heading1">Get in touch with me!</h1>
          <p>
              <ExternalLink href = "https://www.linkedin.com/in/anees-kaleefathullah/"><img src = {linkedinicon} alt = 'linkedin icon' width = "40px"/></ExternalLink> &nbsp; &nbsp;
              <ExternalLink href = "https://www.facebook.com/aneesahmdk"><img src = {facebookicon} alt = 'facebook icon' width = "40px"/></ExternalLink> <br/><br/> 
              Mail to : <span style = {{fontWeight : "bold"}}>aneesahmdk@gmail.com</span> or use the contact form below
              </p>
          <Form className = "contactMeform" onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup >
              <label className="text-muted">Your email address</label>
              <input
              required
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
<FormGroup >
              <label className="text-muted">Name</label>
              <input
              required
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
<FormGroup >
              <label className="text-muted">Subject</label>
              <input
              required
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
<FormGroup >
              <label className="text-muted">Message</label>
              <textarea
              required
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
<button variant="primary" type="submit">
              Send mail
            </button>
          </Form>
          </div>
      </div>
    )
  }
}
export default ContactForm