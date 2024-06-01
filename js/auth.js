document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            // Here you would typically make an API call to your backend to authenticate the user
            // For the sake of this example, we'll use localStorage
            const user = JSON.parse(localStorage.getItem(email));
            if (user && user.password === password) {
                localStorage.setItem("loggedInUser", email);
                window.location.href = "home.html";
            } else {
                alert("Invalid email or password.");
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("signupName").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;
            // Here you would typically make an API call to your backend to create the user
            // For the sake of this example, we'll use localStorage
            const user = { name, email, password };
            localStorage.setItem(email, JSON.stringify(user));
            localStorage.setItem("loggedInUser", email);
            window.location.href = "home.html";
        });
    }
});
