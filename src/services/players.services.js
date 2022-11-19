import axios from 'axios';

class PlayerService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/players
  createOne = async (requestBody) => {
    return this.api.post('/player', requestBody);
  }

  // GET /api/players
  getAll = async () => {
    return this.api.get('/player');
  }

  // GET /api/players/:id
  getOne = async (id) => {
    return this.api.get(`/player/${id}`);
  }

  // PUT /api/players/:id
  updateOne = async (id, requestBody) => {
    return this.api.put(`/player/${id}`, requestBody);
  }

  // DELETE /api/players/:id
  deleteProject = async (id) => {
    return this.api.delete(`/player/${id}`);
  } 


}

// Create one instance of the service
const playerService = new PlayerService();

export default playerService;