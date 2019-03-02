const faker = require('faker');

// my solution
for(i=0; i<10; i++) {
    console.log(faker.fake("{{commerce.productName}}" + " - $" + "{{commerce.price}}"));
}


// teacher's solution
for(i=0; i<10; i++) {
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}