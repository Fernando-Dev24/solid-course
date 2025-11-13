(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProductById(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    private masterEmail: string = "email@email.com";

    sendEmail(emailList: string[], template: "to-clients" | "to-admins") {
      console.log("Enviando correo a los clientes", template);
      return emailList.length;
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  class ProductBloc {
    private ProductService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.ProductService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.ProductService.getProductById(id);
    }

    saveProduct(product: Product) {
      this.ProductService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["email@email.com"], "to-clients");
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
