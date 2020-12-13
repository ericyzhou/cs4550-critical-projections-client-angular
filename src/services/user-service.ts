import {Injectable} from '@angular/core';

const loginUrl = 'https://critical-projections-server.herokuapp.com/api/login'; // 'http://localhost:8080/api/login'
const url =  'https://critical-projections-server.herokuapp.com/api/users'; // 'http://localhost:8080/api/users';
const urlValidate = 'https://critical-projections-server.herokuapp.com/api/validate'; // 'http://localhost:8080/api/validate';
const urlLoggedIn = 'https://critical-projections-server.herokuapp.com/api/curuser'; // 'http://localhost:8080/api/curuser';
const urlOutLog = 'https://critical-projections-server.herokuapp.com/api/logout'; // 'http://localhost:8080/api/logout';

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

  updateUser = (username: string, user: any) =>
    fetch(`${url}/${username}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteUser = (username: string) =>
    fetch(`${url}/${username}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}
