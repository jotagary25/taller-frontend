import { basePath } from "./config";

export function signUpApi(data) {
  const url = `${basePath}/usuario/login`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      // console.log(result);
      return result;
    })
    .catch((err) => {
      return { ok: false, message: err.message };
    });
}

export function getAllUsuarios() {
  const url = `${basePath}/usuario/get_user?indice=1&cant=100&nombre=-1`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return { ok: false, message: err.message };
    });
}
