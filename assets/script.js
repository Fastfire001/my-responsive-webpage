function main() {
    document.querySelector('li.btn-pf-all').addEventListener("click", showAllPf);
    document.querySelector('li.btn-pf-panoramas').addEventListener("click", showPanoramasPf);
    document.querySelector('li.btn-pf-portraits').addEventListener("click", showPortraitsPf);
    document.querySelector('li.btn-pf-macro').addEventListener("click", showMacroPf);
    document.querySelector('li.btn-pf-journal').addEventListener("click", showJournalPf);
}

function hideSelectedBtn() {

    document.querySelector('li.btn-pf-all').classList.remove('selected');
    document.querySelector('li.btn-pf-panoramas').classList.remove('selected');
    document.querySelector('li.btn-pf-portraits').classList.remove('selected');
    document.querySelector('li.btn-pf-macro').classList.remove('selected');
    document.querySelector('li.btn-pf-journal').classList.remove('selected');
}

function showPanoramasPf() {
    hideSelectedBtn();
    hideAllPf();
    var imgs = document.querySelectorAll('img.panoramas');
    for (var i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('hide');
    }
    this.classList.add('selected');
}

function showPortraitsPf() {
    hideSelectedBtn();
    hideAllPf();
    var imgs = document.querySelectorAll('img.portraits');
    for (var i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('hide');
    }
    this.classList.add('selected');
}

function showMacroPf() {
    hideSelectedBtn();
    hideAllPf();
    var imgs = document.querySelectorAll('img.macro');
    for (var i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('hide');
    }
    this.classList.add('selected');
}

function showJournalPf() {
    hideSelectedBtn();
    hideAllPf();
    var imgs = document.querySelectorAll('img.journal');
    for (var i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('hide');
    }
    this.classList.add('selected');
}

function showAllPf() {
    hideSelectedBtn();
    var imgs = document.querySelectorAll('img.img-pf');
    for (var i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('hide');
    }
    this.classList.add('selected');
}

function hideAllPf() {
    var imgs = document.querySelectorAll('img.img-pf');
    for (var i = 0; i < imgs.length; i++){
        imgs[i].classList.add('hide');
    }
}

window.onload = main;