export class Total {
marca: string;
total: number;

  constructor(marca: string, total:number){
    this.marca = marca;
    this.total = total;
  }

}



export class Review {
  id: number;
  source: string;
  name: string;
  description: string;

  constructor(
    id: number,
    source: string,
    name: string,
    description: string
  ) {
    this.id = id;
    this.source = source
    this.name = name;
    this.description = description;
  }
 }

