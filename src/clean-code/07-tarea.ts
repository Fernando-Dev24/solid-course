(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(
      public value: string,
      public placeholder: string,
      public id: string
    ) {}
  }

  class InputEvents {
    constructor(
      public value: string,
      public placeholder: string,
      public id: string
    ) {}

    setFocus() {}
    getValue() {
      return this.value;
    }
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement
  interface InputElementProps {
    id: string;
    type: HtmlType;
    value: string;
    placeholder: string;
  }

  class InputElement {
    public html: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;

    constructor({ id, type, value, placeholder }: InputElementProps) {
      this.html = new HtmlElement(id, type);
      this.attributes = new InputAttributes(value, placeholder, id);
      this.events = new InputEvents(value, placeholder, id);
    }
  }

  const nameField = new InputElement({
    id: "name",
    placeholder: "Enter your name",
    type: "input",
    value: "Fernando",
  });

  console.log(nameField);
})();
