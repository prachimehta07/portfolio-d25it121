const BASE_URL = "http://localhost:5000";

async function handleResponse(res) {
  const data = await res.json().catch(() => ({}));
  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
    throw new Error(data.error || "Session expired");
  }
  if (!res.ok) {
    throw new Error(data.error || "Request failed");
  }
  return data;
}

function authHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export function getTasks() {
  return fetch(`${BASE_URL}/tasks`, { headers: authHeaders() }).then(handleResponse);
}

export function createTask(task) {
  return fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(task),
  }).then(handleResponse);
}

export function updateTask(id, updates) {
  return fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(updates),
  }).then(handleResponse);
}

export function deleteTask(id) {
  return fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  }).then(handleResponse);
}

export function registerUser(email, password) {
  return fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
}

export function loginUser(email, password) {
  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
}