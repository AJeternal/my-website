// scripts.js

let users = [
    // برای تست
    { username: 'test', password: 'test', email: 'test@example.com' }
];

let posts = [];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('ورود موفقیت‌آمیز بود');
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = "main.html";
    } else {
        alert('نام کاربری یا رمز عبور اشتباه است');
    }
}

function showSignup() {
    window.location.href = "signup.html";
}

function signup() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const email = document.getElementById('email').value;

    if (username && password && email) {
        users.push({ username, password, email });
        alert('ثبت نام موفقیت‌آمیز بود');
        window.location.href = "index.html";
    } else {
        alert('لطفاً تمامی فیلدها را پر کنید');
    }
}

function goBack() {
    window.history.back();
}

function viewPosts() {
    window.location.href = "posts.html";
}

function createPost() {
    window.location.href = "create-post.html";
}

function viewAbout() {
    window.location.href = "about.html";
}

function logout() {
    const confirmLogout = confirm("آیا از این کار مطمئن هستید؟");
    if (confirmLogout) {
        localStorage.removeItem('currentUser');
        window.location.href = "index.html";
    }
}

function submitPost() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (title && content && currentUser) {
        posts.push({ title, content, author: currentUser.username });
        alert('پست با موفقیت ایجاد شد');
        window.location.href = "main.html";
    } else {
        alert('لطفاً تمامی فیلدها را پر کنید');
    }
}

function loadPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><small>نویسنده: ${post.author}</small>`;
        postsContainer.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (window.location.pathname.endsWith('posts.html')) {
        loadPosts();
    }
});
