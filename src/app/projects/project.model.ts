export class Project {
  public name: string;
  public description: string;
  public imagePath: string;
  public sourcePath: string;
  public prodPath: string;

  constructor(name: string, desc: string, imagePath: string, sourcePath: string, prodPath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.sourcePath = sourcePath;
    this.prodPath = prodPath;
  }
}