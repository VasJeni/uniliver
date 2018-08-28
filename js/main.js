function openResumeForm() {
    let formVisibility = document.getElementsByClassName("form-wrap");
    formVisibility[0].className += " d-block";
    console.log('openResumeForm');
}
let firsVideoSrc = 'https://www.youtube.com/embed/ZRjE6u63iJ0';
let secondVideoSrc = 'https://www.youtube.com/embed/dbWYqdBNgH4';

function closeResumeForm() {
    let getForm = document.getElementsByClassName("js-close-form-by-wrap");
    getForm[0].classList.remove("d-block");
    console.log('closeResumeForm');
}

function openFirstVideo() {
    let videoWrap = document.getElementsByClassName('first-video');
    videoWrap[0].className += ' d-block';
    console.log('openFirstVideo');
}
function openSecondVideo() {
    let videoWrap = document.getElementsByClassName('second-video');
    let videoArea = document.getElementsByClassName('js-video-wrap');
    videoWrap[0].className += ' d-block';
    console.log('openSecondVideo');
}
function closeVideoByWrap(){
    let getVideoWrap = document.getElementsByClassName('video');
    player.pauseVideo();
    getVideoWrap[0].classList.remove('d-block');
    console.log('closeVideoByWrap');

}


document.addEventListener('DOMContentLoaded', function () {
    let $btnOpenForm = document.querySelectorAll('.js-btn-open-resume-form');
    const $firstVideo = document.querySelector('.capabilities__item__img-f');
    const $btnCloseForm = document.querySelector('.js-close-resume-form');
    const $FormWrap = document.querySelector('.js-close-resume-form');
    const $secondVideo = document.querySelector('.capabilities__item__img-s');
    const $closeForm = document.querySelector('.js-close-form-by-wrap');
    const $closeVideo = document.querySelector('.video');



    $btnCloseForm.addEventListener('click', closeResumeForm);
    $closeForm.addEventListener('click',closeResumeForm );
    $('.js-form-area').on('click', function(e) {
        e.stopPropagation();
    });
    $('.video').on('click', function(a) {
        a.stopPropagation();
    });



    let getTel = document.getElementById('tel');
    let maskOptions = {
        mask : '+(3) (000) 000-00-00'
    };
    let mask = new IMask(getTel, maskOptions);





    for (let i=0; i<$btnOpenForm.length; i++){
        $btnOpenForm[i].addEventListener('click', openResumeForm);
    }

    $firstVideo.addEventListener('click', openFirstVideo);
    $secondVideo.addEventListener('click', openSecondVideo);

    $closeVideo.addEventListener('click', closeVideoByWrap);
    var player;
    function onYouTubePlayerAPIReady() {
        player = new YT.Player('player', {
        });
        document.getElementById('resume').onclick = function() {
            player.playVideo();
        };
        document.getElementById('close_vid').onclick = function() {
            player.pauseVideo();
        };
    }

});
