
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const bookNowButton = document.getElementById('bookNowButton');
    if (!bookNowButton) {
        console.error('Button not found!');
        return;
    }

    bookNowButton.addEventListener('click', function () {
        console.log('Book Now button clicked');

        const name = document.getElementById('name').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const message = document.getElementById('message').value.trim();

       
        if (!name || !contact) {
            alert('Please fill out the required fields: Name and Contact Number.');
            console.log('Validation failed: Missing name or contact');
            return;
        }

        
        const phoneNumber = '919270064416'; 

       
        const whatsappMessage = 'Hello, my name is ${encodeURIComponent(name)}. Contact: ${encodeURIComponent(contact)}. Message: ${encodeURIComponent(message)}';

        
        const whatsappLink = 'https://wa.me/919270064416}?text=${whatsappMessage}';

        
        console.log('WhatsApp link:', whatsappLink);

        
        window.open(whatsappLink, '_blank');
    });
});
