import axios from 'axios';

class TeamService {
  constructor() {
    this.api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/team` || "http://localhost:5005/team"
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

  // POST '/'
  createOne = async (requestBody) => {
    return this.api.post('/', requestBody);
  }

  // GET /team (retorna todos os team)
  getAll = async () => {
    return this.api.get('/');
  }

  // GET /team/:id (retorna um team especifico)
  getOne = async (id) => {
    return this.api.get(`/${id}`);
  }

  // PATCH /team/:id (edita um time especifico)
  updateOne = async (id, requestBody) => {
    return this.api.patch(`/${id}`, requestBody);
  }

  // DELETE /team/:id (deleta um time)
  deleteProject = async (id) => {
    return this.api.delete(`/${id}`);
  } 


}

// Create one instance of the service
const teamService = new TeamService();

export default teamService;