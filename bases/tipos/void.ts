(() => {
  function callBatman(): void {
    console.log('Batcall!');
    return;
  };

  const callSuperman = (): void => {
    return;
  };

  const a = callBatman();

  console.log(a)

})();