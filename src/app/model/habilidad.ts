export class Habilidad {
  id? : number;
  name: string;
  val: number;

  constructor(name: string, val: number) {
    this.name = name;
    this.val = val;
  }
}
