export const signUp = async (userData) => {
    try {
      const response = await axios.post(`http://192.168.1.7:4000/users/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  };
  
  export const logIn = async (credentials) => {
    try {
      const response = await axios.post(`http://192.168.1.101:4000/users/login`, credentials);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  };
  