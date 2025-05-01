const allForm = [];
const signUp = () => {
  if (username.value === "" || gmail.value === "" || password.value === "") {
    show.innerHTML = `<marquee><p style="color:red; font-weight:bold;">input those fields now joor💀</p></marquee> `;
    setTimeout(() => {
      document.querySelector(".show").style.display = "none";
    }, 7450);
  } else {
    console.log("object");
button2.style.display = 'block'
    messenger.innerHTML = `Congratualations ${username.value}. Press the button below to proceed`;
    
    const naming = document.getElementById('username').value
    const email = document.getElementById('gmail').value
    const pass = document.getElementById('password').value
    const compendium = {
    naming, email, pass
  }
    allForm.push = {compendium}
    console.log(allForm);
  }

  const username = document.getElementById('username').value
  localStorage.setItem('username', username)
};


