import {iBlogComponent} from "../interfaces/iBlogComponent";
import {iBlog} from "../interfaces/iBlog";

export class BlogComponent implements iBlogComponent {
  private _id: string;
  private _layout: number;
  private _text: string;
  private _image: string;
  private _imageSubtitle: string;
  private _name: string;
  private _place: string;
  private _country: string;


  constructor(blogComponent: iBlogComponent) {
    this._id = blogComponent.id;
    this._layout = blogComponent.layout;
    this._text = blogComponent.text;
    this._image = blogComponent.image;
    this._imageSubtitle = blogComponent.imageSubtitle;
    this._name = blogComponent.name;
    this._place = blogComponent.place;
    this._country = blogComponent.country;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get layout(): number {
    return this._layout;
  }

  set layout(value: number) {
    this._layout = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get imageSubtitle(): string {
    return this._imageSubtitle;
  }

  set imageSubtitle(value: string) {
    this._imageSubtitle = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get place(): string {
    return this._place;
  }

  set place(value: string) {
    this._place = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }
}
