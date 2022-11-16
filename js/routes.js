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
                        <p>Lunes a Viernes de 12:00 a 15:00 y de 19:00 a 23:00</p>
                        <p>Domingos de 12:00 a 15:00 y de 19:00 a 23:00</p>
                        <p>Sábados de 12:00 a 15:00 y de 19:00 a 23:00</p>
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
                    <p>Disfruta de nuestros brunchs especiales de 11:00 a 15:00</p>
                </div>
                <div class="brunch-item">
                    <div class="brunch-item-img">
                        <img src="./assets/image/Brunch.jpg" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
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
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">Brunch Especial nº2</h4>
                        <p class="item-text-description">
                            Una Infusión + Beagle con Huevo, Bacon, Palta y Queso Crema + Porción de Torta a elección (puede ser de Manzana, Lemon Pie o Banana) + Jugo Exprimido.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$4500</p>
                    </div>
                </div>
                <div class="brunch-column-row">
                    <div class="brunch-item">
                        <div class="brunch-item-img">
                            <img src="./assets/image/pancake.jpg" alt="brunch">
                        </div>
                        <div class="brunch-item-text">
                            <h4 class="item-text-title">Pancakes</h4>
                            <p class="item-text-description">
                                Pancakes de avena con frutos rojos, puede ser acompañado con crema de queso o azucar derretido. bebida a eleccion.
                            </p>
                        </div>
                        <div class="brunch-item-price">
                            <p>$600</p>
                        </div>
                    </div>
                    <div class="brunch-item vegan">
                        <div class="brunch-item-img">
                            <img src="./assets/image/ensalada.jpg" alt="brunch">
                        </div>
                        <div class="brunch-item-text">
                            <h4 class="item-text-title">ensaladas(vegano)</h4>
                            <p class="item-text-description">
                                Ensaladas de quinoa con tomates cherry, zanahoria, pepino, tofu, hierbas frescas y vinagreta de miel y mostaza. bebida a eleccion.
                            </p>
                        </div>
                        <div class="brunch-item-price">
                            <p>$800</p>
                        </div>
                    </div>
                    <div class="brunch-item">
                        <div class="brunch-item-img">
                            <img src="./assets/image/hamburguesa.jpg" alt="brunch">
                        </div>
                        <div class="brunch-item-text">
                            <h4 class="item-text-title">California Burger</h4>
                            <p class="item-text-description">
                                Hamburguesa con queso, tomate, lechuga, cebolla, pepinillos y salsa de mostaza. bebida a eleccion.
                            </p>
                        </div>
                        <div class="brunch-item-price">
                            <p>$1300</p>
                        </div>
                    </div>
                    <div class="brunch-item vegan">
                        <div class="brunch-item-img">
                        <img src="./assets/image/Sandwich.jpg" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">Sándwich Halloumi(vegano)</h4>
                        <p class="item-text-description">Pan de molde, lechuga, zanahoria, pepino, tomates, queso halloumi, hierbas frescas. bebida a eleccion.</p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$1000</p>
                    </div>
                </div>
                <div class="brunch-item">
                    <div class="brunch-item-img">
                        <img src="./assets/image/milanesa.jpeg" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">Milanesa de Peceto Napolitana</h4>
                        <p class="item-text-description">
                            Milanesa de pecceto a la napolitana con papas y huevos a la plancha. bebida a eleccion.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$1400</p>
                    </div>
                </div>
                <div class="brunch-item">
                    <div class="brunch-item-img">
                        <img src="./assets/image/croissant.jpg" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">croissant</h4>
                        <p class="item-text-description">
                            Croissant relleno de jamón y queso con salsa de tomate. bebida a eleccion.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$960</p>
                    </div>
                </div>
                <div class="brunch-item">
                    <div class="brunch-item-img">
                        <img src="./assets/image/focaccia.jpg" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">focaccia</h4>
                        <p class="item-text-description">
                            Focaccia de tomate, queso y hierbas frescas. bebida a eleccion.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$1200</p>
                    </div>
                </div>
                <div class="brunch-item">
                    <div class="brunch-item-img">
                        <img src="./assets/image/guacamole.jpg" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">Sandwich de Guacamole</h4>
                        <p class="item-text-description">
                            Sandwich de guacamole, queso, huevo y carne. bebida a eleccion.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$890</p>
                    </div>
                </div>
                <div class="brunch-item vegan">
                    <div class="brunch-item-img">
                        <img src="./assets/image/tostada.jpg" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">tostadas(vegano)</h4>
                        <p class="item-text-description">
                            Tostadas de aguacate, tomate y hierbas frescas. bebida a eleccion.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$550</p>
                    </div>
                </div>
                <div class="brunch-item vegan">
                    <div class="brunch-item-img">
                        <img src="./assets/image/granola.jpg" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">bols de granola(vegano)</h4>
                        <p class="item-text-description">
                            Bols de granola con yogur y frutos rojos.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$670</p>
                    </div>
                </div>
                <div class="brunch-item">
                    <div class="brunch-item-img">
                        <img src="./assets/image/omelette.webp" alt="brunch">
                    </div>
                    <div class="brunch-item-text">
                        <h4 class="item-text-title">Omelette de Jamón y queso</h4>
                        <p class="item-text-description">
                            con papas o verdes. bebida a eleccion.
                        </p>
                    </div>
                    <div class="brunch-item-price">
                        <p>$1100</p>
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
                        <h3>infusiones</h3>
                        <div class="item-name">
                            <p>Te negro</p>
                        </div>
                        <div class="item-price">
                            <p>$90</p>
                        </div>
                        <div class="item-name">
                            <p>Te Rojo</p>
                        </div>
                        <div class="item-price">
                            <p>$100</p>
                        </div>
                        <div class="item-name">
                            <p>Te blanco</p>
                        </div>
                        <div class="item-price">
                            <p>$190</p>
                        </div>
                        <div class="item-name">
                            <p>Te amarillo</p>
                        </div>
                        <div class="item-price">
                            <p>$180</p>
                        </div>
                    </div>
                    <div class="bebidas-column-row-item">
                        <h3>Café</h3>
                        <div class="item-name">
                            <p>Oscuro</p>
                        </div>
                        <div class="item-price">
                            <p>$100</p>
                        </div>
                        <div class="item-name">
                            <p>Cappuccino</p>
                        </div>
                        <div class="item-price">
                            <p>$140</p>
                        </div>
                        <div class="item-name">
                            <p>Americano</p>
                        </div>
                        <div class="item-price">
                            <p>$90</p>
                        </div>
                        <div class="item-name">
                            <p>espresso</p>
                        </div>
                        <div class="item-price">
                            <p>$100</p>
                        </div>
                    </div>
                    <div class="bebidas-column-row-item">
                        <h3>gaseosas</h3>
                        <div class="item-name">
                            <p>Coca cola 500ml</p>
                        </div>
                        <div class="item-price">
                            <p>$190</p>
                        </div>
                        <div class="item-name">
                            <p>Coca cola light 500ml</p>
                        </div>
                        <div class="item-price">
                            <p>$200</p>
                        </div>
                        <div class="item-name">
                            <p>Sprite</p>
                        </div>
                        <div class="item-price">
                            <p>$190</p>
                        </div>
                        <div class="item-name">
                            <p>fanta</p>
                        </div>
                        <div class="item-price">
                            <p>$210</p>
                        </div>
                    </div>
                    <div class="bebidas-column-row-item">
                        <h3>jugos</h3>
                        <div class="item-name">
                            <p>exprimido de naranja</p>
                        </div>
                        <div class="item-price">
                            <p>$290</p>
                        </div>
                        <div class="item-name">
                            <p>jugo de arandanos</p>
                        </div>
                        <div class="item-price">
                            <p>$200</p>
                        </div>
                        <div class="item-name">
                            <p>batido de banana</p>
                        </div>
                        <div class="item-price">
                            <p>$290</p>
                        </div>
                        <div class="item-name">
                            <p>jugo de frutilla</p>
                        </div>
                        <div class="item-price">
                            <p>$280</p>
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
                            <img src="./assets/image/mac.jpg" alt="brunch">
                        </div>
                        <div class="infantil-item-text">
                            <h4 class="item-text-title">Mac and Cheese</h4>
                            <p class="item-text-description">
                                Macarons and cheese con gaseosa (Elegir la gaseosa)
                            </p>
                        </div>
                        <div class="infantil-item-price">
                            <p>$900</p>
                        </div>
                    </div>
                    <div class="infantil-item">
                        <div class="infantil-item-img">
                            <img src="./assets/image/milanesakid.jpg" alt="brunch">
                        </div>
                        <div class="infantil-item-text">
                            <h4 class="item-text-title">Milanesa con guarnicion</h4>
                            <p class="item-text-description">
                                Milanesa(carne,pollo a eleccion) <p>con papas o ensalada (Elegir la gasosa)</p>
                            </p>
                        </div>
                        <div class="infantil-item-price">
                            <p>$1100</p>
                        </div>
                    </div>
                    <div class="infantil-item vegan">
                        <div class="infantil-item-img">
                            <img src="./assets/image/milasoja.jpg" alt="brunch">
                        </div>
                        <div class="infantil-item-text">
                            <h4 class="item-text-title">Milanesa de soja</h4>
                            <p class="item-text-description">
                                Milanesa de soja con papas o ensalada (Elegir la gasosa)
                            </p>
                        </div>
                        <div class="infantil-item-price">
                            <p>$990</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
    },
    contact: {
        path: '/contact',
        template: `<h1>📱 Contacto</h1>`,
    }
}