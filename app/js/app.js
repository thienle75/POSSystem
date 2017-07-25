
var espressos = {  type:  'Espresso',
                   varieties: [{    name:'Caffè Mocha',
                                    count: 0,
                                    baseprice: 5.99,
                                    src: 'img/mocha.jpg',
                                    modifiers: [{   name: 'Chocolate Syrup',
                                                    price: 0.25,
                                                    count: 0
                                                },  
                                                {   
                                                    name: 'Whipped Cream',
                                                    price: 0.3, 
                                                    count: 0
                                                }]
                                },
                                {
                                    name:'Caffè Americano',
                                    count: 0,
                                    baseprice: 5.99,
                                    src: 'img/americano.jpg',
                                    modifiers: [{   name: 'Chocolate Syrup',
                                                    price: 0.25,
                                                    count: 0
                                                },  
                                                {   
                                                    name: 'Whipped Cream',
                                                    price: 0.3, 
                                                    count: 0
                                                }]
                                }]
                };


var coffees = {     type:  'Coffee',
                    varieties: [
                        {
                            name:'Caffè Misto',
                            count: 0,
                            baseprice: 2.99,
                            src: 'img/mitso.jpg',
                            modifiers: [{   name: 'Suger',
                                            price: 0.2,
                                            count: 0
                                        },
                                        {   name: 'Milk',
                                            price: 0.5,
                                            count: 0
                                        }] 
                        },
                        {
                            name:'Iced Coffee',
                            count: 0,
                            baseprice: 1.99,
                            src: 'img/iced_coffee.jpg',
                            modifiers: [{   name: 'Suger',
                                            price: 0.2,
                                            count: 0
                                        },
                                        {   name: 'Milk',
                                            price: 0.5,
                                            count: 0
                                        }]  
                        }
                    ]
            };

var teas = {        type:  'Tea',
                    varieties: [
                    {
                        name:'Earl Grey',
                        count: 0,
                        baseprice: 0.99,
                        src: 'img/earl_gray.jpg',
                        modifiers: [{ name: 'Suger',
                         price: 0.2,
                         count: 0
                        },
                        {name: 'Milk',
                         price: 0.5,
                         count: 0
                        }]},
                    {
                        name:'Royal English Breakfast Brewed Tea',
                        count: 0,
                        baseprice: 1.99,
                        src: 'img/english_breakfast.jpg',
                        modifiers: [{ name: 'Suger',
                         price: 0.2,
                         count: 0
                        },
                        {name: 'Milk',
                         price: 0.5,
                         count: 0
                        }]
                    }
                    ]
            };

var smoothies = {   type:  'Smoothie',
                    varieties: [{
                        name: 'Chocolate Smoothie',
                        count : 0,
                        baseprice: 4.99,
                        src: 'img/chocolate_smoothie.jpg',
                        modifiers: [{ name: 'Smile',
                            price: 0,
                            count: 0
                        },
                        {   name: 'Huge',
                            price: 0,
                            count: 0
                        }]
                    }, 
                    {
                        name: 'Orange Mango Smoothie',
                        count : 0,
                        baseprice: 3.99,
                        src: 'img/orange_mango_smoothie.jpg',
                        modifiers: [{ name: 'Smile',
                            price: 0,
                            count: 0
                        },
                        {   name: 'Huge',
                            price: 0,
                            count: 0
                        }]
                    }]
                };

var drinks = [
     espressos,
     coffees,
     teas,
     smoothies
];


var app = new Vue({
    el: '#app',
    data: {
        drinks : drinks,
        total: 0
    },
    // ready: function(){
    //     this.loadDrinks();
    // },
    methods: {
        /**
        * Total amount of order is a calculated tax free when the user press order
        * @author Ali
        * @name order
        */
        order : function(){
            var main_price = 0, side_price = 0;
            for (var i = 0; i < this.drinks.length; i++ ){
                for(var j = 0; j < this.drinks[i].varieties.length; j++){
                    main_price = main_price + (this.drinks[i].varieties[j].baseprice) * (this.drinks[i].varieties[j].count);
                    for(var k = 0; k < this.drinks[i].varieties[j].modifiers.length; k++){
                        side_price = side_price + (this.drinks[i].varieties[j].modifiers[k].price * this.drinks[i].varieties[j].modifiers[k].count);
                    }
                }
            }
            this.total = main_price + side_price;
            }
        //     ,
        // loadDrinks: function(){
        //     this.$http.get('/drinks').then(function(response){
        //         //success callback
        //         this.drinks = response;
        //     }, function(error){
        //         // error callback
        //         console.log("No drink for you today!");
        //     });
        // }
        // ,
        // buy : function(){
        //     this.$http.get('/pay', this.total).then(function(reposonce){
        //         console.log("Payment is done");
        //     }, function(error){
        //         console.log("Error in payment");
        //     });
        // }
    }
});

