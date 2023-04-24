import BasePage from '../pages/base.page';


class ArticuloPage extends BasePage {
     //WebElements
   get color(){ return $('#input-option217') }

   /**
     * Click en el elemento seleccion de color
    * */
    async selecionarColor() {
        await super.clickearElemento(this.color);
    }

}
export default new ArticuloPage();
