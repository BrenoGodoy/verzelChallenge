import axios from "axios";

const requestLogin = (email, password) => {
  const request = axios.post('http://localhost:5024/Login', {email, password})
  .then((data) => {
    return data.data
  })
  .catch((e) => {
    return { error: e.message };
  });

  return request;
};

export default requestLogin;
