document.addEventListener('DOMContentLoaded', function () {
    //начало сдвинутого куска

    function openResumeForm() {
        let formVisibility = document.getElementsByClassName("form-wrap");
        formVisibility[0].className += " d-block";
        console.log('openResumeForm');
    }
    let firsVideoSrc = 'https://www.youtube.com/embed/ZRjE6u63iJ0';
    let secondVideoSrc = 'https://www.youtube.com/embed/dbWYqdBNgH4';

    function closeResumeForm() {
        let getForm = document.getElementsByClassName("form-wrap");
        getForm[0].classList.remove("d-block");
    }

    function openFirstVideo() {
        let videoWrap = document.getElementsByClassName('video');
        /*   let videoArea = document.getElementsByClassName('js-video-wrap');*/
        /*    videoArea[0].setAttribute('src',firsVideoSrc);*/
        videoWrap[0].className += ' d-block';
        console.log('openFirstVideo');
    }
    function openSecondVideo() {
        let videoSecondWrap = document.getElementsByClassName('second-video');
        // let videoArea = document.getElementsByClassName('js-video-wrap');
        //videoArea[0].setAttribute('src',secondVideoSrc);
        videoSecondWrap[0].className += ' d-block';
        console.log('openSecondVideo');
    }
    function closeFirstVideoByWrap(){
        let getVideoWrap = document.getElementsByClassName('video');
        getVideoWrap[0].classList.remove('d-block');
        player.pauseVideo();
        console.log('closeVideoByWrap');
    }
    function closeSecondVideo(){
        let getSecondVideoWrap = document.getElementsByClassName('second-video');
        getSecondVideoWrap[0].classList.remove('d-block');
        player2.pauseVideo();
        console.log('closeSecondVideo');
    }
    //вставленый перемещённый кусок

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    let $btnOpenForm = document.querySelectorAll('.js-btn-open-resume-form');
    const $firstVideo = document.querySelector('.capabilities__item__img-f');
    const $btnCloseForm = document.querySelector('.js-close-resume-form');
    const $FormWrap = document.querySelector('.js-close-resume-form');
    const $secondVideo = document.querySelector('.capabilities__item__img-s');
    $btnCloseForm.addEventListener('click', closeResumeForm);

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

    const $closeForm = document.querySelector('.js-close-form-by-wrap');
    const $closeVideo = document.querySelector('.video');
    const $closeSecondVideo = document.querySelector('.second-video');

    $closeForm.addEventListener('click',closeResumeForm );

    for (let i=0; i<$btnOpenForm.length; i++){
        $btnOpenForm[i].addEventListener('click', openResumeForm);
    }

    $firstVideo.addEventListener('click',  openFirstVideo);
    $secondVideo.addEventListener('click', openSecondVideo);

    $closeVideo.addEventListener('click', closeFirstVideoByWrap);
    $closeSecondVideo.addEventListener('click', closeSecondVideo);


});
