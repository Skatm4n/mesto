import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor( data , popupSelector) {
    super(popupSelector);
    this._cardData = data;
  }

  open() {
    this._popupAlbumImage = this._popup.querySelector('.album__image');
    this._popupAlbumImageCapture = this._popup.querySelector('.album__image-capture');

    this._popupAlbumImage.src = this._cardData.link;
    this._popupAlbumImage.alt = this._cardData.name;
    this._popupAlbumImageCapture.textContent = this._cardData.name;

    super.open();
  }
}
