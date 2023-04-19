describe('Carrito', () => {
    it('Debería buscar apple cinema y seleccionar el segundo color', async () => {
        await browser.url('/');
        const barraDeBusqueda = await $('[name="search"]');
        await barraDeBusqueda.setValue('apple cinema');
        await barraDeBusqueda.keys('Enter');
        await browser.pause(5000);
        
        const articulo = await $('//[@id="content"]/div[3]/div/div/div[1]/a/img');
        await articulo.click();


        const selectColor = await $('#input-option217');
        const value = await selectColor.getValue();
        console.log(value);
        await selectColor.selectByAttribute('value', '3');
        console.log(await selectColor.getValue());
    });
 });