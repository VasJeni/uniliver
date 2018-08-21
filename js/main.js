function openResumeForm() {
    let formVisibility = document.getElementsByClassName("form-wrap");
    formVisibility[0].className += " d-block";
}
function f() {
    return true;
}

function closeResumeForm() {
    let getForm = document.getElementsByClassName("form-wrap");
    getForm[0].classList.remove("d-block");
    console.log('123');
}

document.addEventListener('DOMContentLoaded', function () {
    let $btnOpenForm = document.querySelectorAll('.js-btn-open-resume-form');
    const $btnCloseForm = document.querySelector('.js-close-resume-form');
    const $closeFormByWrap = document.querySelector('.js-close-resume-form');
    $btnCloseForm.addEventListener('click', closeResumeForm);

    $('.js-form-area').on('click', function(e) {
        e.stopPropagation();
    });
    let getTel = document.getElementById('tel');
    let maskOptions = {
        mask : '+(3) (000) 000-00-00'
    };
    let mask = new IMask(getTel, maskOptions);

    const $closeForm = document.querySelector('.js-close-form-by-wrap');
    $closeForm.addEventListener('click',closeResumeForm );
    for (let i=0; i<$btnOpenForm.length; i++){
        $btnOpenForm[i].addEventListener('click', openResumeForm);
    }
});
