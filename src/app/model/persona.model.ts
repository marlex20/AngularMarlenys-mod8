export class Persona {
  id?: number;
  backImage: string;
  name: string;
  title: string;
  photo: string;
  about: string;

  constructor(backImage: string, name: string, title: string, photo: string, about: string) {

    this.backImage = backImage;
    this.name = name;
    this.title = title;
    this.photo = photo;
    this.about = about;
  }
  
}