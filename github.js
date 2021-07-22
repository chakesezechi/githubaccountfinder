class GitHub {
  constructor(){
    this.client_id = '40dc98ece91bdc8acba7';
    this.client_secret = '6db503e476ada9ed6b26a3fc7167d263f543c20e';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json()


    return {
      profile
    }
  }
}