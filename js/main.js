function openResumeForm() {
    let formVisibility = document.getElementsByClassName("resume-form");
    formVisibility[0].className += " d-block";
}

function closeResumeForm() {
    let getForm = document.getElementsByClassName("resume-form");
    getForm[0].classList.remove("d-block");
    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    const $btnOpenForm = document.querySelector('.js-btn-open-resume-form');
    const $btnCloseForm = document.querySelector('.js-close-resume-form');

    $btnOpenForm.addEventListener('click', openResumeForm);
    $btnCloseForm.addEventListener('click', closeResumeForm);
});