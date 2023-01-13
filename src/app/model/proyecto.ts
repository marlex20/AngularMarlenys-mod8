export class Proyecto {
  id? : number;
  name: string;
  image: string;  
  description: string;
  date: string;
  url: string;

  constructor(name: string, image: string, description: string, date: string, url: string) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.date = date;    
    this.url = url;
  }
}
