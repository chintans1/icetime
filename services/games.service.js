import axios from 'axios';
import { API_BASE_URL } from 'react-native-dotenv';

const apiUrl = `${API_BASE_URL}/v1`

const getGamesForDate = (date) =>
  axios.get(`${apiUrl}/games`, {
          params: {
            date
          }
        })
       .then((response) => response)
       .catch((error) => console.error(error)) // TODO: Handle error

export {
  getGamesForDate
}