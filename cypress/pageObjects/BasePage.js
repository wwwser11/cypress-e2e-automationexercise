import NavigationMenu from './NavigationMenu';

class BasePage {
    constructor() {
        this.navigationMenu = NavigationMenu; // NavigationMenu подключен
    }

    baseUrl = 'https://automationexercise.com';
}

export default BasePage;



