
export default class UserInfo {
  constructor(nameSelector, descriptionSelector, avatarSelector) {
    this._avatar = document.querySelector(avatarSelector);
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent
    }
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._description.textContent = userData.about;
    this._avatar.src = userData.avatar;
    this._id = userData._id;
  }

  changeAvatar(avatar) {
    this._avatar.src = avatar;
  }
}
