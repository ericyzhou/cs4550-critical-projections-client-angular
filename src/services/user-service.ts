import {Injectable} from '@angular/core';

const url = 'https://critical-projections-server.herokuapp.com/api/users';

@Injectable()
export class UserService {
  getUserByName = (username: string) => {
    fetch(`${url}/${username}`)
      .then(response => response.json());
  }

  createUser = (userId: number, body: any) =>
    fetch(`${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
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
