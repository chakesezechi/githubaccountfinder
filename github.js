class GitHub {
  constructor(){
    this.client_id = '40dc98ece91bdc8acba7';
    this.client_secret = '489fa0fe3f91812eba99c6619ec154123e7c2444';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json()

    
    return {
      profile
    }
  }
}