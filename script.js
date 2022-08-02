//identify empty div
const container = document.querySelector("#container")
console.log(customers)
function showCustomerData(customerArray) {
    for (let customer of customerArray){
        //create big div for each customer to hold img, name, email, street address, state, DOB, and customer time
        let customerDiv = document.createElement(   'div');
        customerDiv.classList.add('customer');
        //create divs thats within the customer div
        //create name div
            let nameDiv = document.createElement('div');
            //create class for div
                nameDiv.classList.add('name')
                // get information and how to display it
                nameDiv.innerText = `${customer.name.first} ${customer.name.last}`
        //create img div
            let imageDiv = document.createElement('img');
                imageDiv.classList.add ("image");
                imageDiv.src = customer.picture.thumbnail
        //create email div
            let emailDiv = document.createElement('div');
                emailDiv.classList.add('email');
                emailDiv.innerText = `${customer.email}`;
        //create street address div
            let streetDiv = document.createElement('div');
                streetDiv.classList.add('street');
                streetDiv.innerText = `${customer.location.street.number} ${customer.location.street.name}`; 
        //create state with zipcode div
            let stateDiv = document.createElement('div')
                stateDiv.classList.add('state');
                stateDiv.innerText = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`;  
        //create DOB div
            let dobDiv = document.createElement('div');
                dobDiv.classList.add('dob');
                dobDiv.innerText = `DOB: ${customer.dob.date}`
        //create Customer since div
            let dateoriginDiv = document.createElement('div');
                dateoriginDiv.classList.add('dateorigin');
                dateoriginDiv.innerText = `Customer since: ${customer.registered.date}`;
        //append to add child element to parent element container so container should be last and first element should be image and do it in order like line 6 in js
        customerDiv.appendChild(imageDiv);
        //customerDiv.appendChild(nameDiv);
        customerDiv.appendChild(nameDiv);
        customerDiv.appendChild(emailDiv);
        customerDiv.appendChild(streetDiv);
        customerDiv.appendChild(stateDiv);
        customerDiv.appendChild(dobDiv);
        customerDiv.appendChild(dateoriginDiv);
        container.appendChild(customerDiv);
    }

}

showCustomerData(customers);