const axios = require('axios').default;
const qs = require('qs');

class keycloakClient {
  constructor() {
    this.client_id = 'my_client';
    this.client_secret = 'nDlbR6QOy6Xxr5YUAao9MUpLaQsHzQ8A'
    this.instance = axios.create({
      baseURL: 'http://localHost:8080',
      timeout: 3000,
    });
  }
  getInstance() {
    return this.instance;
  }
  async login(user, password) {
      try {
        const data = { 
            'grant_type': 'password',
            'client_id': this.client_id,
            'client_secret': this.client_secret,
            'username': user,
            'password': password
         };
       
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: 'http://localhost:8080/realms/activo/protocol/openid-connect/token',
        };

        const res = await axios(options);

        return res.data
    } catch (error) {
        return error
    }
  }
  async getInfo(token) {
    
    const key = 'Bearer ' + token;
    try {
      const options = {
          method: 'GET',
          headers: { 'Authorization': key },
          url: 'http://localhost:8080/realms/activo/protocol/openid-connect/userinfo',
      };
      const res = await axios(options);
      return res.data
  } catch (error) {
      return error
  }
}

}

module.exports = new keycloakClient();