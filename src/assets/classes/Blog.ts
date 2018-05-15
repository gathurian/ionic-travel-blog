import {iBlog} from "../interfaces/iBlog";

export class Blog implements iBlog {
  private _id: string;
  private _title: string;
  private _abstract: string;
  private _previewImage: string;
  private _date: string;
  private _content: string[];
  private _draftFlag: boolean;
  private _publicFlag: boolean;
  private _visibleFor: string[];


  constructor(blog: iBlog) {
    this._id = blog.id;
    this._title = blog.title;
    this._abstract = blog.abstract;
    this._previewImage = blog.previewImage;
    this._date = blog.date;
    this._content = blog.content;
    this._draftFlag = blog.draftFlag;
    this._publicFlag = blog.publicFlag;
    this._visibleFor = blog.visibleFor;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get abstract(): string {
    return this._abstract;
  }

  set abstract(value: string) {
    this._abstract = value;
  }

  get previewImage(): string {
    return this._previewImage;
  }

  set previewImage(value: string) {
    this._previewImage = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get content(): string[] {
    return this._content;
  }

  set content(value: string[]) {
    this._content = value;
  }

  get draftFlag(): boolean {
    return this._draftFlag;
  }

  set draftFlag(value: boolean) {
    this._draftFlag = value;
  }

  get publicFlag(): boolean {
    return this._publicFlag;
  }

  set publicFlag(value: boolean) {
    this._publicFlag = value;
  }

  get visibleFor(): string[] {
    return this._visibleFor;
  }

  set visibleFor(value: string[]) {
    this._visibleFor = value;
  }
}
