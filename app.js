//Initialize GitHub
const github = new GitHub;

//Initialize UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input
    const userText = e.target.value;

    if(userText !== ''){
      // Make http call
      github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show alert

        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      })
    } else {
      // Clear profile
    }
});