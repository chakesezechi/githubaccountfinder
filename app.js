//Initialize GitHub
const github = new GitHub;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input
    const userText = e.target.value;

    if(userText !== ''){
      github.getUser(userText)
      .then(data => {
        console.log(data)
      })
    }
});