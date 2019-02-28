const faker = require('faker');

// let randomProduct = faker.fake(commerce.productName;
for(i=0; i<10; i++) {
    console.log(faker.fake("{{commerce.productName}}" + " - $" + "{{commerce.price}}"));
}