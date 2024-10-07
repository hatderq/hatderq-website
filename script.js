// Add event listener to the form submit button
document.querySelector('.contact-us form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get the form data
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    // Send the form data to the server
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});