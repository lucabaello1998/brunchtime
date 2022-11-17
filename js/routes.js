const PATHS = {
    home: {
        path: '/',
        template: `<section class="carta">
        <div class="container">
            <div class="carta-column">
                <div class="carta-column-text">
                    <h1 class="carta-column-text-h1">Donde la gastronomía y la hospitalidad, se vuelven uno.</h1>
                    <div class="carta-column-text-horario">    
                    <h4 class="carta-column-text-h1">horarios de atencion</h4>
                        <p>Lunes a Viernes de 07:00 a 12:00 y de 15:00 a 19:00</p>
                        <p>Domingos de 08:00 a 12:00 y de 15:00 a 19:00</p>
                        <p>Sábados de 07:00 a 10:00 y de 15:00 a 19:00</p>
                        <p>direccion: Av. Corrientes 1234, CABA</p>
                    </div>
                </div>
                <div class="carta-column-formaspago">
                    <h4 class="carta-column-text-h1">Formas de pago</h4>
                    <div class="carta-column-formaspago-img">
                        <img src="./assets/image/visa.png" alt="visa">
                        <img src="./assets/image/mastercard.png" alt="mastercard">
                        <img src="./assets/image/mercadopago.webp" alt="americanexpress">
                        <img src="./assets/image/efectivo.png" alt="mercadopago">
                    </div>
                </div> 
                </div>
            </div>
    </section>`,
    },
    brunch: {
        path: '/brunch',
        template: `<section class="menu-brunch">
        <div class="container">
            <div class="brunch-column">
                <div class="brunch-text">
                    <h1>Brunch</h1>
                    <p>Disfruta de nuestros brunchs especiales de 16:00 a 17:00</p>
                </div>
                <div class="brunch-item">
                    <div class="brunch-item-img">
                        <img src="./assets/image/Brunch.jpg" alt="brunch">
                    </div>
                    <div class="brunch-item-text brunch-text">
                        <h4 class="item-text-title">Brunch Especial nº1</h4>
                        <p class="item-text-description">
                            Una Infusión + Tostadas con Queso y Mermelada + Porción de Budín + Mix Energético con Yogur y Frutas + Bruschetta Caprese + Papas con Panceta y Huevo + Jugo de Naranja o Limonada.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$4520</p>
                    </div>
                </div>
                <div class="brunch-item">
                    <div class="brunch-item-img">
                        <img src="./assets/image/brunch2.jpg" alt="brunch">
                    </div>
                    <div class="brunch-item-text brunch-text">
                        <h4 class="item-text-title">Brunch Especial nº2</h4>
                        <p class="item-text-description">
                            Una Infusión + Beagle con Huevo, Bacon, Palta y Queso Crema + Porción de Torta a elección (puede ser de Manzana, Lemon Pie o Banana) + Jugo Exprimido.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$4500</p>
                    </div>
                </div>
                <h1>Desayuno</h1>
                <div class="brunch-column-row">
                    <div class="brunch-item">
                        <div class="brunch-item-img">
                            <img src="./assets/image/menuv2.1/carrol-cake.jpg" alt="brunch">
                        </div>
                        <div class="brunch-item-text">
                            <h4 class="item-text-title">Carrot Cake</h4>
                            <p class="item-text-description">
                                Carrot Cake con crema de queso y nueces.
                            </p>
                        </div>
                        <div class="brunch-item-price">
                            <p>$500</p>
                        </div>
                    </div>
                    <div class="brunch-item">
                        <div class="brunch-item-img">
                            <img src="./assets/image/menuv2.1/rogel.jpg" alt="brunch">
                        </div>
                        <div class="brunch-item-text">
                            <h4 class="item-text-title">Rogel (individual)</h4>
                            <p class="item-text-description">
                                con abundante dulce de leche y merengue italiano.
                            </p>
                        </div>
                        <div class="brunch-item-price">
                            <p>$500</p>
                        </div>
                    </div>
                    <div class="brunch-item">
                        <div class="brunch-item-img">
                            <img src="./assets/image/browniesintacc.webp" alt="brunch">
                        </div>
                        <div class="brunch-item-text">
                            <h4 class="item-text-title">Brownie (individual)</h4>
                            <p class="item-text-description">
                                Porcion de brownie indivual.
                            </p>
                        </div>
                        <div class="brunch-item-price">
                            <p>$600</p>
                        </div>
                    </div>
                    <div class="brunch-item">
                        <div class="brunch-item-img">
                        <img src="./assets/image/menuv2.1/cheesecake.webp" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">Porcion de Chessecake Frutilla</h4>
                        <p class="item-text-description">
                            Porcion de cheesecake de frutilla.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$700</p>
                    </div>
                </div>
                <div class="brunch-item vegan">
                    <div class="brunch-item-img">
                    <img src="./assets/image/menuv2.1/tartafrutilla.jpg" alt="brunch">
                </div>
                <div class="brunch-item-text">
                    <h4 class="item-text-title">Porcion de Tarta de Frutilla (opcion vegana)</h4>
                    <p class="item-text-description">
                        porcion de tarta con abundantes frutillas.
                    </p>
                </div>
                <div class="brunch-item-price">
                    <p>$400</p>
                </div>
            </div>
            <div class="brunch-item vegan">
                <div class="brunch-item-img">
                <img src="./assets/image/menuv2.1/cheesecake.webp" alt="brunch">
            </div>
            <div class="brunch-item-text">
                <h4 class="item-text-title">Roll de canela (opcion vegana)</h4>
                <p class="item-text-description">
                    Roll de canela con crema de queso vegano.
                </p>
            </div>
            <div class="brunch-item-price">
                <p>300</p>
            </div>
        </div>
                <h1>Almuerzo</h1>
                <div class="brunch-item">
                    <div class="brunch-item-img">
                        <img src="./assets/image/menuv2.1/waffle.jpg" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">Waffles con Jamon y Queso</h4>
                        <p class="item-text-description">
                            Waffles acompañados de jamon y queso derretidos en su interior.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$500</p>
                    </div>
                </div>
                <div class="brunch-item">
                    <div class="brunch-item-img">
                        <img src="./assets/image/menuv2.1/scone.webp" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">Scones</h4>
                        <p class="item-text-description">
                            Scones con mermelada y crema.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$300</p>
                    </div>
                </div>
                <div class="brunch-item">
                    <div class="brunch-item-img">
                        <img src="./assets/image/menuv2.1/huevosrev.webp" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">Huevos Revueltos</h4>
                        <p class="item-text-description">
                            Huevos revueltos con jamon y queso.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$400</p>
                    </div>
                </div>
                <div class="brunch-item vegan">
                    <div class="brunch-item-img">
                        <img src="./assets/image/pizzasintacc.jpg" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">Pizza individual (opcion vegana)</h4>
                        <p class="item-text-description">
                            Pizza individual con salsa de tomate, queso vegano y vegetales.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$500</p>
                    </div>
                </div>
            </div>
    </div>
</section>`,
    },
    bebidas: {
        path: '/bebidas',
        template: `<section class="bebidas">
        <div class="container">
            <div class="bebidas-column">
                <div class="bebidas-column-text">
                    <h1>Bebidas</h1>
                    <p>Disfruta de nuestras bebidas e infusiones</p>
                </div>
                <div class="bebidas-column-row">
                    <div class="bebidas-column-row-item">
                        <h3>Frias</h3>
                        <div class="item-name">
                            <p>Jugo de Naranja Exprimido</p>
                        </div>
                        <div class="item-price">
                            <p>$300</p>
                        </div>
                        <div class="item-name">
                            <p>Licuado de Frutilla</p>
                        </div>
                        <div class="item-price">
                            <p>$400</p>
                        </div>
                        <div class="item-name">
                            <p>Linea Coca-Cola</p>
                        </div>
                        <div class="item-price">
                            <p>$320</p>
                        </div>
                        <div class="item-name">
                            <p>Patagonia(Lata)</p>
                        </div>
                        <div class="item-price">
                            <p>$350</p>
                        </div>
                    </div>
                    <div class="bebidas-column-row-item">
                        <h3>Calientes</h3>
                        <div class="item-name">
                            <p>Cafe Con Leche</p>
                        </div>
                        <div class="item-price">
                            <p>$300</p>
                        </div>
                        <div class="item-name">
                            <p>Capuchino</p>
                        </div>
                        <div class="item-price">
                            <p>$400</p>
                        </div>
                        <div class="item-name">
                            <p>Te Negro</p>
                        </div>
                        <div class="item-price">
                            <p>$250</p>
                        </div>
                        <div class="item-name">
                            <p>Te de Frutos Rojos</p>
                        </div>
                        <div class="item-price">
                            <p>$250</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
    },
    infantil: {
        path: '/infantil',
        template: `<section class="infantil">
        <div class="container">
            <div class="infantil-column">
                <div class="infantil-text">
                    <h2>Menu Infantil</h2>
                    <p>Contamos con un menú para que los más pequeños de la casa puedan disfrutar de una comida saludable y divertida</p>
                </div>
                <div class="infantil-column-row">
                    <div class="infantil-item">
                        <div class="infantil-item-img">
                            <img src="./assets/image/cookies.jpg" alt="brunch">
                        </div>
                        <div class="infantil-item-text">
                            <h4 class="item-text-title">Cookies</h4>
                            <p class="item-text-description">
                                Cookies con chips de chocolate y nueces.
                            </p>
                        </div>
                        <div class="infantil-item-price">
                            <p>$200</p>
                        </div>
                    </div>
                    <div class="infantil-item">
                        <div class="infantil-item-img">
                            <img src="./assets/image/medialunasintacc.jpeg" alt="brunch">
                        </div>
                        <div class="infantil-item-text">
                            <h4 class="item-text-title">Medialuna de Jamon y Queso</h4>
                            <p class="item-text-description">
                                Medialuna de jamon y queso con salsa de tomate.
                            </p>
                        </div>
                        <div class="infantil-item-price">
                            <p>$200</p>
                        </div>
                    </div>
                    <div class="infantil-item vegan">
                        <div class="infantil-item-img">
                            <img src="./assets/image/menuv2.1/chocolatada.jpg" alt="brunch">
                        </div>
                        <div class="infantil-item-text">
                            <h4 class="item-text-title">Chocolatada</h4>
                            <p class="item-text-description">
                                Chocolatada con crema batida.
                            </p>
                        </div>
                        <div class="infantil-item-price">
                            <p>$300</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
    },
    celiacos: {
        path: '/celiacos',
        template: `<section class="celiacos">
        <div class="container">
            <div class="container-celiacos-column">
                <div class="container-celiacos-text">
                    <h2>Menú Celiacos</h2>
                    <p>En nuestro restaurante contamos con un menú especial para celiacos, donde podrás disfrutar de nuestros platos sin gluten. </p>
                </div>
                <div class="container-celiacos-menu">
                    <h1>Desayuno</h1>
                    <div class="celiaco-item">
                        <div class="celiaco-item-img">
                            <img src="./assets/image/menuv2.1/lemonpie.jpg" alt="brunch">
                        </div>
                        <div class="celiaco-item-text">
                            <h4 class="item-text-title">Lemon Pie (individual)</h4>
                            <p class="item-text-description">
                                Tarta de limón con base de galleta y crema de limón, sin Tacc.
                            </p>
                        </div>
                        <div class="celiaco-item-price">
                            <p>$600</p>
                        </div>
                    </div>
                    <div class="celiaco-item">
                        <div class="celiaco-item-img">
                            <img src="./assets/image/menuv2.1/tortachoco.jpg" alt="brunch">
                        </div>
                        <div class="celiaco-item-text">
                            <h4 class="item-text-title">Porcion de Torta de Chocolate</h4>
                            <p class="item-text-description">
                                Torta de chocolate con crema de chocolate.
                            </p>
                        </div>
                        <div class="celiaco-item-price">
                            <p>$500</p>
                        </div>
                    </div>
                    <div class="celiaco-item">
                        <div class="celiaco-item-img">
                            <img src="./assets/image/croissant.jpg" alt="brunch">
                        </div>
                        <div class="celiaco-item-text">
                            <h4 class="item-text-title">croissant</h4>
                            <p class="item-text-description">
                                Croissant con mermelada de frutos rojos, sin gluten.
                            </p>
                        </div>
                        <div class="celiaco-item-price">
                            <p>$300</p>
                        </div>
                    </div>
                    <h1>Almuerzo</h1>
                    <div class="celiaco-item">
                        <div class="celiaco-item-img">
                            <img src="./assets/image/menuv2.1/chippa.jpg" alt="brunch">
                        </div>
                        <div class="celiaco-item-text">
                            <h4 class="item-text-title">Chipa de Queso</h4>
                            <p class="item-text-description">
                                4 unidades de chipa de queso, sin gluten.
                            </p>
                        </div>
                        <div class="celiaco-item-price">
                            <p>$150</p>
                        </div>
                    </div>
                    <div class="celiaco-item">
                        <div class="celiaco-item-img">
                            <img src="./assets/image/menuv2.1/tostado.jpg" alt="brunch">
                        </div>
                        <div class="celiaco-item-text">
                            <h4 class="item-text-title">Tostado</h4>
                            <p class="item-text-description">
                                Tostado que puede hacer acompañado con mermelada de frutos rojos o jamon y queso, sin tacc.
                            </p>
                        </div>
                        <div class="celiaco-item-price">
                            <p>$350</p>
                        </div>
                    </div>
                </div>
            </div>
    </section>`,
    }
}