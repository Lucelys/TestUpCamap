import BasePage from '../pages/base.page';

 class HomePage extends BasePage {

   //WebElements
   get barraDeBusqueda(){ return $('[name="search"]') }
   articulo(nombre){return $(`=${nombre}`)}

   //-------------------------------------------------------------------------------------------------------//

   /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} articulo que se buscará
    */
   async buscar(articulo) {
       await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
       await this.barraDeBusqueda.keys('Enter');
   }

    /**
     * Hace click en el artículo
     * @param {String} nombreArticulo nombre del artículo al cual ingresar
     */
    async ingresarAlArticulo(nombreArticulo){
                await super.clickearElemento(await this.articulo(nombreArticulo));
    }

 }
 export default new HomePage();