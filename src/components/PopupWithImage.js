import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupAlbumImage = this._popup.querySelector('.album__image');
    this._popupAlbumImageCapture = this._popup.querySelector('.album__image-capture');

  }

  openImage = (name, link) => {

    this._popupAlbumImage.src = link;
    this._popupAlbumImage.alt = name;
    this._popupAlbumImageCapture.textContent = name;

    super.open();
  }
}
