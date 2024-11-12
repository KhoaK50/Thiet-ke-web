const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', ()=>{
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', ()=>{
    wrapper.classList.toggle('active');
});






function switchLanguage(lang) {
    const contentVi = document.getElementById('content-vi');
    const contentEn = document.getElementById('content-en');

    if (lang === 'vi') {
        contentVi.classList.remove('hidden');
        contentEn.classList.add('hidden');
    } else if (lang === 'en') {
        contentVi.classList.add('hidden');
        contentEn.classList.remove('hidden');
    }
}