export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public image: string,
    public rating: { rate: number; count: number },
    public description?: string,
    public quantity: number = 0,
  ) {}
}
