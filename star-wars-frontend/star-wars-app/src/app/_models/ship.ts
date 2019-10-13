export class Ship {
  id: string;
  name: string;
  image: string;
  constructor(builder: any) {
    this.id = builder.url.split('/').filter(item => {
      return item !== '';
    }).slice(-1)[0];
    this.name = builder.name;
    this.image = 'https://starwars-visualguide.com/assets/img/starships/' + this.id + '.jpg';
  }
}
