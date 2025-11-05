(() => {
  const temperaturesInCelsius = [33.6, 12.34];

  const serverIp = "123.123.123.123";

  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  const usersEmails = users.map((user) => user.email);

  const canJump = false;
  const canRun = true;
  const hasItems = false;
  const isLoading = true;

  const startTimestamp = new Date().getTime();
  //....
  // 3 doritos después
  //...
  const endTimestamp = new Date().getTime() - startTimestamp;

  // Funciones
  function getBooks() {
    throw new Error("Function not implemented.");
  }

  function getBooksByUrl(url: string) {
    throw new Error("Function not implemented.");
  }

  function getSquareArea(sides: number) {
    throw new Error("Function not implemented.");
  }

  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
