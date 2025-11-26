export type MenuSide = 'food' | 'drinks';

export interface MenuItem {
    name: {
        en: string;
        es: string;
    };
    price: number;
    description: {
        en: string;
        es: string;
    };
    category: string;
}

export interface MenuCategory {
    title: string;
    subtitle?: string;
    items: MenuItem[];
}

// === SIDE A: FOOD ===
export const foodMenu: MenuCategory[] = [
    {
        title: "EPs",
        subtitle: "Breakfast / 8AM-11AM",
        items: [
            {
                name: {
                    en: "Egg Tacos",
                    es: "Tacos de Huevo"
                },
                price: 7,
                description: {
                    en: "Flour tortilla, cheese crust, beans, egg, bacon",
                    es: "Tortilla de harina, costra de queso, frijoles, huevo, tocino"
                },
                category: "EPs"
            },
            {
                name: {
                    en: "Hash Tacos",
                    es: "Tacos Hash"
                },
                price: 7,
                description: {
                    en: "Flour tortilla, cheese crust, egg, potato, bacon",
                    es: "Tortilla de harina, costra de queso, huevo, papa, tocino"
                },
                category: "EPs"
            },
            {
                name: {
                    en: "Morning Toast",
                    es: "Tostada Mañanera"
                },
                price: 6.5,
                description: {
                    en: "Cream cheese, avocado, poached eggs, spicy garlic oil on sourdough",
                    es: "Queso crema, aguacate, huevos pochados, aceite de ajo picante en pan de masa madre"
                },
                category: "EPs"
            },
            {
                name: {
                    en: "Pancake",
                    es: "Panqueque"
                },
                price: 7,
                description: {
                    en: "Blueberry pancake with house whipped cream",
                    es: "Panqueque de arándanos con crema batida de la casa"
                },
                category: "EPs"
            }
        ]
    },
    {
        title: "LPs",
        subtitle: "Lunch / 11AM-4PM",
        items: [
            {
                name: {
                    en: "Tomato Soup w/ Grilled Cheese",
                    es: "Sopa de Tomate con Queso a la Parrilla"
                },
                price: 8,
                description: {
                    en: "Roasted tomatoes/peppers cream with cheddar sourdough sandwich",
                    es: "Crema de tomates/pimientos asados con sándwich de cheddar en pan de masa madre"
                },
                category: "LPs"
            },
            {
                name: {
                    en: "Flautas Ahogadas",
                    es: "Flautas Ahogadas"
                },
                price: 6.5,
                description: {
                    en: "Corn tortillas filled w/ chicken & potatoes, tomatillo sauce",
                    es: "Tortillas de maíz rellenas de pollo y papas, salsa de tomatillo"
                },
                category: "LPs"
            },
            {
                name: {
                    en: "Cranberry Turkey Sandwich",
                    es: "Sándwich de Pavo con Arándanos"
                },
                price: 8,
                description: {
                    en: "Smoked turkey, mozzarella, cranberry jelly on whole wheat",
                    es: "Pavo ahumado, mozzarella, mermelada de arándanos en pan integral"
                },
                category: "LPs"
            },
            {
                name: {
                    en: "Betabel Salad",
                    es: "Ensalada de Betabel"
                },
                price: 8,
                description: {
                    en: "Beetroot, mixed greens, creamy turmeric dressing, house cheese blend",
                    es: "Remolacha, mezcla de verdes, aderezo cremoso de cúrcuma, mezcla de quesos de la casa"
                },
                category: "LPs"
            }
        ]
    },
    {
        title: "45s",
        subtitle: "Snacks / 4PM-10PM",
        items: [
            {
                name: {
                    en: "Hummus",
                    es: "Hummus"
                },
                price: 7,
                description: {
                    en: "Chickpea dip, garlic, herbs w/ Naan bread",
                    es: "Dip de garbanzo, ajo, hierbas con pan Naan"
                },
                category: "45s"
            },
            {
                name: {
                    en: "Parmesan Fries",
                    es: "Papas Parmesanas"
                },
                price: 5,
                description: {
                    en: "French fries, parmesan cheese, garlic aioli",
                    es: "Papas fritas, queso parmesano, aioli de ajo"
                },
                category: "45s"
            },
            {
                name: {
                    en: "Raro Roll",
                    es: "Rollo Raro"
                },
                price: 3.5,
                description: {
                    en: "Chicken, beans, cheese, corn w/ avocado ranch",
                    es: "Pollo, frijoles, queso, maíz con ranch de aguacate"
                },
                category: "45s"
            },
            {
                name: {
                    en: "Crab Puffs",
                    es: "Bolitas de Cangrejo"
                },
                price: 6,
                description: {
                    en: "Cream cheese w/ crab rangoons",
                    es: "Queso crema con rangún de cangrejo"
                },
                category: "45s"
            }
        ]
    }
];

// === SIDE B: DRINKS ===
export const drinksMenu: MenuCategory[] = [
    {
        title: "Raro Collection",
        subtitle: "Signature",
        items: [
            {
                name: {
                    en: "Jazzy Brew",
                    es: "Brew Jazz"
                },
                price: 6,
                description: {
                    en: "Espresso, orange concentrate, aromatics, local honey",
                    es: "Espresso, concentrado de naranja, aromáticos, miel local"
                },
                category: "Raro Collection"
            },
            {
                name: {
                    en: "Aerocano",
                    es: "Aerocano"
                },
                price: 4,
                description: {
                    en: "Smooth espresso, steamed w/ ice",
                    es: "Espresso suave, vaporizado con hielo"
                },
                category: "Raro Collection"
            },
            {
                name: {
                    en: "Honey Shaken Espresso",
                    es: "Espresso Batido con Miel"
                },
                price: 3,
                description: {
                    en: "Ice shaken espresso w/ local honey",
                    es: "Espresso batido con hielo y miel local"
                },
                category: "Raro Collection"
            },
            {
                name: {
                    en: "Monburan Kohi",
                    es: "Monburan Kohi"
                },
                price: 6,
                description: {
                    en: "Espresso, sweet orange cold foam",
                    es: "Espresso, espuma fría de naranja dulce"
                },
                category: "Raro Collection"
            }
        ]
    },
    {
        title: "Slow Coffee",
        subtitle: "",
        items: [
            {
                name: {
                    en: "V60",
                    es: "V60"
                },
                price: 3.5,
                description: {
                    en: "Pour-over method for clean, nuanced flavors",
                    es: "Método de vertido para sabores limpios y matizados"
                },
                category: "Slow Coffee"
            },
            {
                name: {
                    en: "Chemex",
                    es: "Chemex"
                },
                price: 3.5,
                description: {
                    en: "Classic filtered coffee, smooth and bright",
                    es: "Café filtrado clásico, suave y brillante"
                },
                category: "Slow Coffee"
            },
            {
                name: {
                    en: "French Press",
                    es: "Prensa Francesa"
                },
                price: 3.5,
                description: {
                    en: "Full-bodied, rich coffee experience",
                    es: "Experiencia de café rica y con cuerpo"
                },
                category: "Slow Coffee"
            }
        ]
    },
    {
        title: "Coffee",
        subtitle: "Classics",
        items: [
            {
                name: {
                    en: "Americano",
                    es: "Americano"
                },
                price: 2.5,
                description: {
                    en: "Espresso with hot water, bold and simple",
                    es: "Espresso con agua caliente, audaz y simple"
                },
                category: "Coffee"
            },
            {
                name: {
                    en: "Cappuccino",
                    es: "Capuchino"
                },
                price: 3.5,
                description: {
                    en: "Espresso with steamed milk and foam",
                    es: "Espresso con leche vaporizada y espuma"
                },
                category: "Coffee"
            },
            {
                name: {
                    en: "Latte",
                    es: "Latte"
                },
                price: 4,
                description: {
                    en: "Espresso with velvety steamed milk",
                    es: "Espresso con leche vaporizada aterciopelada"
                },
                category: "Coffee"
            }
        ]
    }
];
