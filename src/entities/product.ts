export class Product {
  public readonly id?: string;

  public title!: string;
  public price!: number;
  public zipcode!: string;
  public seller!: string;
  public thumbnailHd!: string;
  public date!: string;

  constructor(props: Omit<Product, "id">) {
    Object.assign(this, props);
  }
}
