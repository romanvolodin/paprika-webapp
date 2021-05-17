import axios from "axios";

const apiClient = axios.create({
  baseURL: "//localhost:8000/api/v1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getProjects() {
    return apiClient.get("/projects");
  },
  getProject(id) {
    return apiClient.get(`/projects/${id}`);
  },
  createProject(data) {
    return apiClient.post("/projects/", data);
  },
};
