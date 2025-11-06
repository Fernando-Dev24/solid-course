type Size = "" | "XS" | "M" | "L" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    // DRY
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if (this[key].length <= 0) throw Error(`${key} is empty`);
          break;
        case "number":
          if (this[key] <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not a valid type`);
      }
    }

    return true;
  }

  toString() {
    // NO DRY
    /* if (this.name.length < 1) throw Error("name is empty");
    if (this.price < 1) throw Error("name is empty");
    if (this.size.length < 1) throw Error("name is empty"); */

    if (!this.isProductReady()) return;

    return `Product: ${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue large pants", 50, "L");
  console.log(bluePants.toString());
})();
