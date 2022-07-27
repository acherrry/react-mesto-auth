class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._headers = {
      authorization: 'd78f9f58-d39a-4837-9f03-32b39913a524',
      'Content-Type': 'application/json'
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  patchProfileEditing(nameAndAboutObject) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: nameAndAboutObject.name,
        about: nameAndAboutObject.about
      })
    })
    .then(this._checkResponse);
  }

  postAddingNewCard(nameAndLinkObject) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: nameAndLinkObject.name,
        link: nameAndLinkObject.link
      })
    })
    .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  putSettingLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  patchEditingUserAvatar(userAvatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: userAvatar.avatar
      })
    })
    .then(this._checkResponse);
  }

  _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const api = new Api('https://mesto.nomoreparties.co/v1/cohort-43');