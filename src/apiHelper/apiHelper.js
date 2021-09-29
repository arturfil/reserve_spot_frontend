import axios from "axios";

export const baseURL = process.env.REACT_APP_API_URL;

const apiHelper = axios.create({baseURL});

apiHelper.interceptors.request.use(
  async (config) => {
    let jwt_user;
    let token;
    // TODO: add user in value for the jwt
    try {
      token = await JSON.parse(localStorage.getItem('jwtreservespot'));
    } catch (error) {
      console.log(error);
    }

    if (token) {
      config.headers.authorization = token;
    }

    return config
  }
)

export default apiHelper;