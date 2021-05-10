import EmberRouter from '@ember/routing/router';
import config from 'ember0/config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function () {
    this.route('item', { path: '/item/:item_id' });
    this.route('not_found', { path: '/*' });
    this.route('catalog');
    this.route('contact');
    this.route('user');
    this.route('cart', { path: '/shopping-cart' });
});
