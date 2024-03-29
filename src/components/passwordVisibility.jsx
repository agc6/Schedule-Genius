export const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("password");
    const eye = document.querySelector(".eye");
    const closeEye = document.querySelector(".close-eye");

    if (passwordInput.getAttribute("type") === "password") {
        passwordInput.setAttribute("type", "text");
        eye.style.display = "none";
        closeEye.style.display = "block";
    } else {
        passwordInput.setAttribute("type", "password");
        closeEye.style.display = "none";
        eye.style.display = "block";
    }
};
