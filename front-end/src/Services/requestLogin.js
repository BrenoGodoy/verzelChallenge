import axios from "axios";

const requestLogin = (email, password) => {
  axios.post('http://localhost:5024/User', {email, password})
  .then((data) => {
    return data.data
  })
  .catch((e) => {
    return { error: e.message };
  });
};

export default requestLogin;
