const forms = document.getElementsByClassName('action-network-sign-up');
const formArray = Array.from(forms);

formArray.map(form => form.addEventListener('submit', event => { 
    event.preventDefault()
    const formInstance = event.target;
    const formParent = formInstance.parentNode;
    const sucessBox = formInstance.getElementsByClassName("success")[0];
    console.log(sucessBox)
    const errorBox = formInstance.getElementsByClassName("error")[0];
    const formData = new FormData(formInstance); 
  
    const xhr = new XMLHttpRequest();

    // listen for `load` event
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            // parse JSON
            const response = JSON.parse(xhr.responseText);
            // Clear form
            formInstance.reset()
            // success message
            sucessBox.style.display = "block";
        
        }else{
            errorBox.style.display = "block";
        }
    };

    xhr.onerror = function() {
        errorBox.style.display = "block";
    }


	// create a JSON object

   	const json = {
        "person" : {
        "family_name": formData.get("family_name"),
        "given_name": formData.get("given_name"),
            "postal_addresses" : [ 
                { 
                    "postal_code" : formData.get("postal_code"),
                    "country": ""
                }
            ],
            "email_addresses" : [ 
                { 
                    "address" : formData.get("email"),
                    "status" : "subscribed"
                }
            ],
            "custom_fields": {
                "contact_form_message": formData.get("contact_form_message")
            }
        }, 
        "triggers": {
            "autoresponse": {
                "enabled": true
                }
        }
    }

  // open request
  xhr.open('POST', event.target.getAttribute('action'));

  // set `Content-Type` header
  xhr.setRequestHeader('Content-Type', 'application/json');

  // send request with JSON payload
  xhr.send(JSON.stringify(json));

}));