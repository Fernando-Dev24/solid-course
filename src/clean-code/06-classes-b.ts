(() => {
  // no aplicando el principio de responsabilidad unica

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

  interface UserProps extends PersonProps {
    email: string;
    lastAccess?: Date;
    role: string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ name, birthdate, email, gender, role }: UserProps) {
      super({ name, birthdate, gender });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({
      birthdate,
      email,
      gender,
      lastAccess,
      name,
      role,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate, lastAccess });
      this.workingDirectory = "/usr/home";
      this.lastOpenFolder = "/home";
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
