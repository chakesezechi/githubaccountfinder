class GitHub {
  constructor(){
    this.client_id = '40dc98ece91bdc8acba7';
    this.client_secret = '6db503e476ada9ed6b26a3fc7167d263f543c20e';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json()
    const repos = await repoResponse.json()

    return {
      profile,
      repos
    }
  }
}