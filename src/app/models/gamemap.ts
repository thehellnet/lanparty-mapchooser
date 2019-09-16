export class GameMap {
  name: string;
  tag: string;
  image: string;

  constructor(name: string, tag: string, image: string = null) {
    this.name = name;
    this.tag = tag;
    this.image = image;
  }
}
