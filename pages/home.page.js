import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements
   get barraDeBusqueda(){ return $('[name="search"]') }


   //-------------------------------------------------------------------------------------------------------//

   /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} articulo que se buscará
    */
 async buscar(articulo) {
    addStep(`Buscar artículo: ${articulo}`)
    await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
    await this.barraDeBusqueda.keys('Enter');
}

   /**
    * Obtener texto de la barra de búsqueda
    */
   async obtenerTextoBusqueda() {
    addStep('Obtener texto de la barra de búsqueda')
    return await this.barraDeBusqueda.getValue();
}
/**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} articulo que se buscará
    */
async buscar(articulo) {
    addStep(`Buscar artículo: ${articulo}`)
    await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
    await this.barraDeBusqueda.keys('Enter');
}

/**
 * Obtener texto de la barra de búsqueda
 */
async obtenerTextoBusqueda() {
    addStep('Obtener texto de la barra de búsqueda')
    return await this.barraDeBusqueda.getValue();
}

}
export default new HomePage();