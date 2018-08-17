function openResumeForm () {
    let formVisibility=document.getElementsByClassName("resume-form");
    formVisibility[0].className += " d-block";
}
function closeResumeForm() {
    let getForm = document.getElementsByClassName("resume-form");
    getForm[0].classList.remove("d-block");
    return true;
}