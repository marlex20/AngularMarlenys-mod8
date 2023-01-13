export class Educacion {
  id? : number;
  name: string;
  image: string;
  title: string;
  description: string;
  date: string;

  constructor(name: string, image: string, title: string, description: string, date: string) {
    this.name = name;
    this.image = image;
    this.title = title;
    this.description = description;
    this.date = date;
  }
}
