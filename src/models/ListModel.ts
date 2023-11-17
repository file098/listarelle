import { Item } from "./ItemModel";

export class ListModel {
  id!: number;
  name!: string;
  items!: Item[];

  constructor(id: number, name: string, items: Item[]) {
    this.id = id;
    this.name = name;
    this.items = items;
  }
}
