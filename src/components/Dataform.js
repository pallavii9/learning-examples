import React from 'react';
 

function Dataform() {

  function handleFormSubmit(e) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());
  
    // for multi-selects, we need special handling
    formJSON.snacks = data.getAll('snacks');
    
    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
  }
  
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', handleFormSubmit);

  render() {
	
    return (
      <div>
      
      <form>
        <div class="input-group">
          <input id="salutation-mr" name="salutation" type="radio" value="Mr."/>
          <label class="inline" for="salutation-mr">Mr.</label>
          
          <input id="salutation-mrs" name="salutation" type="radio" value="Mrs."/>
          <label class="inline" for="salutation-mrs">Mrs.</label>
          
          <input id="salutation-ms" name="salutation" type="radio" value="Ms."/>
          <label class="inline" for="salutation-ms">Ms.</label>
        </div>
        
        <div class="input-group">
          <label for="name">Full Name</label>
          <input id="name" name="name" type="text"/>
        </div>
        
        <div class="input-group">
          <label for="email">Email Address</label>
          <input id="email" name="email" type="email"/>
        </div>
        
        <div class="input-group">
          <label for="subject">How can I help you?</label>
          <select id="subject" name="subject">
            <option>I have a problem.</option>
            <option>I have a general question.</option>
          </select>
        </div>
        
        <div class="input-group">
          <label for="message">Enter a Message</label>
          <textarea id="message" name="message" rows="6" cols="65"></textarea>
        </div>
        
        <div class="input-group">
          <p class="group-label">Please send me:</p>
          <input id="snacks-pizza" name="snacks" type="checkbox" value="pizza"/>
          <label class="inline" for="snacks-pizza">Pizza</label>
          <input id="snacks-cake" name="snacks" type="checkbox" value="cake"/>
          <label class="inline" for="snacks-cake">Cake</label>
        </div>
        <input name="secret" type="hidden" value="1b3a9374-1a8e-434e-90ab-21aa7b9b80e7"/>
        <button type="submit">Send It!</button>
      </form>
   
    
    <div class="results">
      <h2>Form Data</h2>
      <pre></pre>
    </div>
    </div>
    );
    }
  }

export default Dataform;