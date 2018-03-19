function main() {
    document.querySelector('li.btn-pf-all').addEventListener("click", showAllPf);
    document.querySelector('li.btn-pf-panoramas').addEventListener("click", showPanoramasPf);
    document.querySelector('li.btn-pf-portraits').addEventListener("click", showPortraitsPf);
    document.querySelector('li.btn-pf-macro').addEventListener("click", showMacroPf);
    document.querySelector('li.btn-pf-journal').addEventListener("click", showJournalPf);
}

function showPanoramasPf() {
    hideAllPf();
    var imgs = document.querySelectorAll('img.panoramas');
    for (var i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('hide');
    }
}

function showPortraitsPf() {
    hideAllPf();
    var imgs = document.querySelectorAll('img.portraits');
    for (var i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('hide');
    }
}

function showMacroPf() {
    hideAllPf();
    var imgs = document.querySelectorAll('img.macro');
    for (var i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('hide');
    }
}

function showJournalPf() {
    hideAllPf();
    var imgs = document.querySelectorAll('img.journal');
    for (var i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('hide');
    }
}

function showAllPf() {
    var imgs = document.querySelectorAll('img.img-pf');
    for (var i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('hide');
    }
}

function hideAllPf() {
    var imgs = document.querySelectorAll('img.img-pf');
    for (var i = 0; i < imgs.length; i++){
        imgs[i].classList.add('hide');
    }
}

window.onload = main;