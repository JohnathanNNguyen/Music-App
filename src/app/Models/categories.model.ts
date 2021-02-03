

export class Categories {
  public id: string;
  public name: string;
  public image: string;
  public browseLink: string;

  constructor(id: string, name: string, image: string, browseLink: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.browseLink = browseLink;
  }
}
