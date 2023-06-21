function changeMode(){
    let wholeBody = document.body;
    wholeBody.classList.toggle('body-light');
    wholeBody.classList.toggle('text-dark');

    let mapLight = document.querySelector('.location');
    mapLight.classList.toggle('map-light');

    let profilePic = document.querySelector('.profilepic');
    profilePic.classList.toggle('profilee');

    let opaPic = document.querySelector('.profile-img');
    opaPic.classList.toggle('opaState');

    let lang_logo_bg = document.querySelector('.part-of-sec-3');
    lang_logo_bg.classList.toggle('theme-part-sec-3');
}