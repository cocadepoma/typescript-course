(() => {
  const error = (message: string): (never | number) => {
    if (false) {
      return 0;
    }

    throw new Error(message);
  };

  error("This is never");
})();