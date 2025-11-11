(() => {
  // aplicando el principio de responsabilidad unica
  // priorizar la composicion frente a la herencia

  enum Gender {
    Male = "M",
    Female = "F",
  }

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    lastAccess?: Date;
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    name: string;
    gender: Gender;
    birthdate: Date;
    email: string;
    lastAccess?: Date;
    role: string;
    workingDirectory: string;
    lastOpenFolder: string;
  }

  // esto es una composicion, es decir, esto es lo que reemplaza la herencia
  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      // Ahora en lugar de tener el monton de props solamente tenemos las props de cada clase implementada en una composicion
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "email@email.com",
    role: "Admin",
    name: "Fernando",
    gender: Gender.Male,
    birthdate: new Date("2002-08-24"),
  });

  console.log({
    userSettings,
  });
})();
