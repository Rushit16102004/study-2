function showSlidebar(){
    const slidebar = document.querySelector('.slidebar');
    slidebar.style.display = 'flex';
    const topbar = document.querySelector('.topbar');
    topbar.style.display = 'none';
    const review_img = document.querySelectorAll('.review_img');
    review_img.style.display = 'none'
}
function hideSlidebar(){
    const slidebar = document.querySelector('.slidebar');
    slidebar.style.display = 'none';
    const topbar = document.querySelector('.topbar');
    topbar.style.display = 'flex';
}
const slidebar = document.querySelector('.slidebar');
slidebar.style.display = 'none';

//nav bar hide part
function display_oldpaper_branch() {
    const oldpaper_sub_Menu = document.querySelector('.oldpaper_sub_Menu');
    oldpaper_sub_Menu.style.display = 'flex';
}
function display_studymaterial_branch() {
    const studymaterial_branch_sub_Menu = document.querySelector('.studymaterial_branch_sub_Menu');
    studymaterial_branch_sub_Menu.style.display = 'flex';
}

function hide_sub_Menu() {
    const oldpaper_sub_Menu = document.querySelector('.oldpaper_sub_Menu');
    oldpaper_sub_Menu.style.display = 'none';  
    const slidebar = document.querySelector('.slidebar');
    slidebar.style.display = 'none';
    const topbar = document.querySelector('.topbar');
    topbar.style.display = 'flex';    
}

function toggleSemesterDisplay(activeSemester, activeTab) {
    const semesters = ['.sem_1_and_2', '.sem_3', '.sem_4', '.sem_5', '.sem_6', '.sem_7'];
    const tabs = ['.sem1_2', '.sem3', '.sem4', '.sem5', '.sem6', '.sem7'];

    semesters.forEach((semester, index) => {
        const semesterElement = document.querySelector(semester);
        semesterElement.style.display = (semester === activeSemester) ? 'flex' : 'none';
    });

    tabs.forEach((tab, index) => {
        const tabElement = document.querySelector(tab);
        tabElement.style.backgroundColor = (tab === activeTab) ? 'black' : null;
    });
}

function sem_1and2() {
    toggleSemesterDisplay('.sem_1_and_2', '.sem1_2');
}

function sem_3() {
    toggleSemesterDisplay('.sem_3', '.sem3');
}

function sem_4() {
    toggleSemesterDisplay('.sem_4', '.sem4');
}

function sem_5() {
    toggleSemesterDisplay('.sem_5', '.sem5');
}

function sem_6() {
    toggleSemesterDisplay('.sem_6', '.sem6');
}

function sem_7() {
    toggleSemesterDisplay('.sem_7', '.sem7');
}

function Go_back() {
    window.history.back(-1);
}

document.addEventListener("click",e => {
    let tar = e.target;
    if (tar.name == "toggle")
    tar.removeAttribute("class");
});

// error ppage
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

const links = [
    { href: "www.example.com/faqs", text: "Frequently asked questions" },
    { href: "www.example.com/blog/article", text: "Article Title" },
    { href: "www.example.com/contact", text: "Contact" },
];

inputBox.addEventListener("keyup", () => {
    const input = inputBox.value.toLowerCase();
    const result = input.length ? links.filter(link => link.text.toLowerCase().includes(input)) : [];
    display(result);
});

function display(result) {
    resultsBox.innerHTML = result.length ? `<ul>${result.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}</ul>` : '';
}

// review area
document.addEventListener("DOMContentLoaded", function() {
    var loadingBar = document.getElementById('loadingBar');
    loadingBar.style.width = "100%"; // Start loading

    window.addEventListener('load', function() {
        loadingBar.style.width = "0"; // Hide after page load
    });
});
function submitReview() {
    var review = document.getElementById('reviewInput').value;
    if (review) {
        document.getElementById('responseMessage').innerText = "Review submitted: " + review;
        document.getElementById('reviewInput').value = ''; // Clear the input after submission
    } else {
        document.getElementById('responseMessage').innerText = "Please enter a review before submitting.";
        document.getElementById('responseMessage').style.color = 'red';
    }
}

// social media link
const socialMedia = [
    { name: 'Facebook', url: 'https://www.facebook.com', icon: 'fa-facebook' },
    { name: 'Twitter', url: 'https://www.twitter.com', icon: 'fa-twitter' },
    { name: 'Instagram', url: 'https://www.instagram.com', icon: 'fa-instagram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'fa-linkedin' }
];

const container = document.querySelector('.social-media-links');

socialMedia.forEach(media => {
    const link = document.createElement('a');
    link.href = media.url;
    link.setAttribute('target', '_blank');
    link.className = `social-link ${media.name.toLowerCase()}`;
    link.innerHTML = `<i class="fa ${media.icon}"></i> ${media.name}`;
    container.appendChild(link);
});

// sidebar social media link
function toggleSidebar() {
    var sidebar = document.getElementById("socialSidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function showLoading() {
    const loadingBar = document.getElementById('loading-bar');
    loadingBar.style.transform = 'scaleX(1)';
    setTimeout(() => {
        loadingBar.style.transform = 'scaleX(0)';
    }, 5000);
}

// network.js
window.addEventListener('online', function() {
    console.log('Network connection is back online');
    document.getElementById('error-message').style.display = 'none'; // Hide error message when online
});

window.addEventListener('offline', function() {
    console.log('Network connection is lost');
    document.getElementById('error-message').style.display = 'block'; // Show error message when offline
});