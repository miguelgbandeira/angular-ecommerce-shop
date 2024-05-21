export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: string,
    public image: string,
    public rating: { rate: string; count: number },
    public description?: string,
  ) {}
}
