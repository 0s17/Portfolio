function toggleDetails() {
    const contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === 'block') {
        contactInfo.style.display = 'none';
    } else {
        contactInfo.style.display = 'block';
    }
}
function openPDF() {
    // Replace 'pdfs/example.pdf' with the path to your PDF file
    window.open('Profile.pdf', '_blank');
}
