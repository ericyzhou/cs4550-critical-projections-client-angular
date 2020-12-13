import {Injectable} from '@angular/core';

const loginUrl = 'http://localhost:8080/api/login'; // 'https://critical-projections-server.herokuapp.com/api/login';
const url = 'http://localhost:8080/api/users'; // 'https://critical-projections-server.herokuapp.com/api/users';
const urlValidate = 'http://localhost:8080/api/validate'; // 'https://critical-projections-server.herokuapp.com/api/validate';
const urlLoggedIn = 'http://localhost:8080/api/curuser'; // 'https://critical-projections-server.herokuapp.com/api/curuser';
const urlOutLog = 'http://localhost:8080/api/logout'; // 'https://critical-projections-server.herokuapp.com/api/logout';

@Injectable()
export class UserService {

  getUserByLogin = (login: {username: string, password: string}) =>
    fetch(`${loginUrl}`, {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => response.json())

  getCurrentUser = () =>
    fetch(`${urlLoggedIn}`, {
      credentials: 'include'
    })
      .then(response => response.json())

  logout = () =>
    fetch(`${urlOutLog}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    })
  .then(response => response.json())

  usernameIsValid = (username: string) =>
    fetch(`${urlValidate}/${username}`)
      .then(response => response.json())

  getUserByName = (username: string) =>
    fetch(`${url}/${username}`)
      .then(response => response.json())

  getUserById = (id: number) =>
    fetch(`${url}/id/${id}`)
      .then(response => response.json())

  createUser = (id: number, username: string, password: string, email: string, role: string, profilePic: string) =>
    fetch(`${url}`, {
      method: 'POST',
      body: JSON.stringify({id, username, password, email, role, profilePic}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  updateUser = (userId: number, user: any) =>
    fetch(`${url}/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteUser = (userId: number) =>
    fetch(`${url}/${userId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}
