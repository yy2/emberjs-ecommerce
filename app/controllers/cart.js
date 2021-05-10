import Controller from '@ember/controller';

export default class CartController extends Controller {
    get subtotal() {
        return this.model.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
    }

    get tax() {
        return (0.07 * this.subtotal).toFixed(2);
        // return Math.round((0.07 * this.subtotal * 100) / 100).toFixed(2);
    }

    get total() {
        return this.subtotal + this.tax;
    }
}
