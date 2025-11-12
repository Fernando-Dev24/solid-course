// Forma recomendada para crear clases
// IMPORTANTE: Esto depende mucho de como el equipo decida crear sus clases a lo largo del proyecto

class HtmlElement {
  // Static Props y por ultimo private props
  public static isDomReady: boolean = false;

  private _id: string;
  private type: string;
  private updatedAt: number;

  // Metodos
  static createInput(id: string) {
    return new HtmlElement(id, "input");
  }

  constructor(id: string, type: string) {
    this._id = id;
    this.type = type;
    this.updatedAt = Date.now();
  }

  setType(type: string) {
    this.type = type;
    this.updatedAt = Date.now();
  }

  get id(): string {
    return this._id;
  }
}
