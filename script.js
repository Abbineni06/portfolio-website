
let hireBtn = document.getElementById("hireBtn");

if(hireBtn){

    hireBtn.addEventListener("click", function(e){

        e.preventDefault();

        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=abbinenisaikiran8@gmail.com",
            "_blank"
        );

    });

}
let downloadBtn =

document.getElementById("downloadBtn");
if(downloadBtn){

    downloadBtn.addEventListener("click", function(){

        let link = document.createElement("a");

        link.href = "resume.pdf";

        link.download = "Saikiran_Resume.pdf";

        link.click();

    });


}
let downloadBtn2 =

document.getElementById("downloadBtn2");

if(downloadBtn2){

    downloadBtn2.addEventListener("click", function(){

        let link = document.createElement("a");

        link.href = "resume.pdf";

        link.download = "Saikiran_Resume.pdf";

        link.click();

    });

}
let linkedin =

document.getElementById("linkedin");

if(linkedin){

    linkedin.addEventListener("click", function(){

        window.open(

            "https://www.linkedin.com/in/saikiran-abbineni/",

            "_blank"

        );

    });

}
let github =

document.getElementById("github");

if(github){

    github.addEventListener("click", function(){

        window.open(

            "https://github.com/Abbineni06",

            "_blank"

        );

    });

}
let gmail = document.getElementById("gmail");

if(gmail){

    gmail.addEventListener("click", function(e){

        e.preventDefault();

       window.open(
           "https://mail.google.com/mail/?view=cm&fs=1&to=abbinenisaikiran8@gmail.com",
           "_blank"
       );

    });

}
emailjs.init("XW3oQj1Y9fXNSwCUu");

const contactForm =
document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener(
    "submit",

    function(e){

        e.preventDefault();

        emailjs.sendForm(
            "service_n7vztvy",
            "template_f4936hl",
            this
        )

        .then(() => {

            alert("Message Sent Successfully!");

            contactForm.reset();

        })

        .catch((error) => {

            alert("Failed To Send Message");

            console.log(error);

        });

    }

    );

}