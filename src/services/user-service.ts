import {Injectable} from '@angular/core';

const url = 'https://critical-projections-server.herokuapp.com/api/users';
const urlValidate = 'https://critical-projections-server.herokuapp.com/api/validate';

@Injectable()
export class UserService {

  usernameIsValid = (username: string) =>
    fetch(`${urlValidate}/${username}`)
      .then(response => response.json())

  getUserByName = (username: string) =>
    fetch(`${url}/${username}`)
      .then(response => response.json())

  getUserById = (id: number) =>
    fetch(`${url}/id/${id}`)
      .then(response => response.json())

  createUser = (user: any) =>
    fetch(`${url}`, {
      method: 'POST',
      body: JSON.stringify(user),
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
