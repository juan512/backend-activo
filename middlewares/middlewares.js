
const AuthClient = require('../clients/keycloakClient');


exports.validToken = async (req, res, next) => {

  try {
    const { headers } = req;
    const { authorization } = headers;
    const { acces_token, refresh_token } = authorization;
    console.log(authorization);
    console.log(JSON.stringify(authorization));
    const info = await AuthClient.getInfo(token)
    const status = info.response.status;
    if (status == 401) {
      return res.status(401).json({
        message: "Invalid User"
      });
    } else {
      next(); 
    }     
  } catch (error) {
    return res.status(422).json({
      message: "error"
    });
  }
}