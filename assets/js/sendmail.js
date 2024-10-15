function sendMail(contactForm) {
    emailjs.send("service_p0zh8lg","cv", {
        "from_name" :contactForm.name.value,
        "from_email" :"lochlann_oht@hotmail.com",
        "reply_to": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
     .then(
        function(response){
            console.log("SUCCESS", response);

        },
    function(error) {
        console.log("FAILED", error); 
    })  
    return false;   
}