const  linkBtnHolder = document.getElementById('dash-inner');
const linkBtn = document.getElementById('patient');
const userClick = document.getElementById('user');
const userLinks = document.getElementById('log_links');
const toggleBtn = document.getElementById('toggle_btn');
const dashboardLinks = document.getElementById('dashboard-item');
const closeBtn = document.getElementById('close_btn');

linkBtn.addEventListener('click', ()=>{
    linkBtnHolder.classList.toggle('expand');
})

userClick.addEventListener('click', ()=>{
    userLinks.classList.toggle('appear');
})

toggleBtn.addEventListener('click', ()=>{
    dashboardLinks.classList.toggle('slide-in');
})

closeBtn.addEventListener('click', ()=>{
    dashboardLinks.classList.toggle('slide-in');
})