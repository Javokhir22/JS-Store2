const lightningAnim = document.getElementById("Lightning");

lightningAnim.classList.add('active');
setTimeout(() => lightningAnim.classList.remove('active'), 2000);