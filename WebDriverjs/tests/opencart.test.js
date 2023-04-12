describe('Carrito', () => {
  it('Debería buscar apple cinema', async () => {
    await browser.url('/');
    const barraDeBusqueda = await $('[name="search"]');
    await barraDeBusqueda.setValue('apple cinema');
    await barraDeBusqueda.keys('Enter');
    await browser.pause(5000);
    const dropDownColor = await $('select');
    await dropDownColor.selectByIndex(2);
    console.log(await dropDownColor.getValue());
  });
  
});