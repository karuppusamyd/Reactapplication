import React, { Component } from 'react';
import { useForm} from 'react-hook-form';

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
      <div class="container">
        <h3>Contact</h3>
  
 <form id="bs-validate-demo" onSubmit={handleSubmit(onSubmit)}>
  
   <div class="form-group">
  
     <label for="name">Name:</label>
  
     <input type="text" class="form-control col-md-4" name="name" id="name" aria-describedby="nameHelp" placeholder="Enter First Name" ref={register} />
  
         <div class="invalid-feedback">
  
           Please enter your first name.
  
         </div>
  
   </div>
  
   <div class="form-group">
  
     <label for="EmailDemo">Your Email:</label>
  
     <input type="email" class="form-control col-md-4" name="email" id="EmailDemo" placeholder="Enter email" ref={register} />
  
       <div class="invalid-feedback">
  
         Please Enter a valid email address!
  
       </div> 
  
   </div>

   <div class="form-group">
  
     <label for="phone">Phone:</label>
  
     <input type="text" class="form-control col-md-4" name="phone" id="phone" aria-describedby="nameHelp" placeholder="Enter Phone Number" ref={register} />
  
         <div class="invalid-feedback">
  
           Please enter your phone number.
  
         </div>
  
   </div>

   <div class="form-group">
  
     <label for="subject">Subject:</label>
  
     <input type="text" class="form-control col-md-4" name="subject" id="subject" aria-describedby="nameHelp" placeholder="Enter Subject" ref={register} />
  
         <div class="invalid-feedback">
  
           Please enter your subject.
  
         </div>
  
   </div>

   <div class="form-group">
  
     <label for="message">Message:</label>
  
     <input type="text" class="form-control col-md-4" name="message" id="message" aria-describedby="nameHelp" placeholder="Enter Message" ref={register} />
  
         <div class="invalid-feedback">
  
           Please enter your message.
  
         </div>
  
   </div>
  
   <button type="submit" class="btn btn-dark">Save</button>
  
 </form>
  
 </div>
    );

    
  
}

function onSubmit(values){
  console.log(values);
}

export default Contact;