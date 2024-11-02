let name = "aashish"
let age = 20;

//this is how you define string. 

//console.log(`This is another ${name} and his age: ${age}`);

// console.log("This is how " + name + " could be done. ");


const varr = "aashish"

console.log(`This is another form of making money.${varr}`);

// you can define string my this method also... this is called manually defining. 

const str = new String("aashish")
console.log(str);

const num = new Number(10)
console.log(num);


const str1 = new String('aash')
console.log(str1);

//string in detail. 

const productCatalog = {
    categories: [
      {
        id: 1,
        name: "Electronics",
        products: [
          {
            id: 101,
            name: "Smartphone",
            brand: "TechBrand",
            specifications: {
              display: "6.5-inch OLED",
              processor: "Octa-core 2.9 GHz",
              memory: {
                ram: "8GB",
                storage: "128GB",
                expandable: "Yes, up to 512GB"
              },
              camera: {
                front: "12MP",
                rear: "48MP + 8MP + 5MP"
              },
              battery: "4000mAh",
              os: "Android 11",
            },
            price: 699,
            reviews: [
              { userId: 201, rating: 4.5, comment: "Great phone, but a bit pricey." },
              { userId: 202, rating: 4.0, comment: "Excellent display and camera quality." }
            ],
            availability: "In Stock",
          },
          {
            id: 102,
            name: "Laptop",
            brand: "CompuTech",
            specifications: {
              display: "15.6-inch Full HD",
              processor: "Intel Core i7",
              memory: {
                ram: "16GB",
                storage: "512GB SSD",
              },
              battery: "10 hours",
              os: "Windows 10",
            },
            price: 1199,
            reviews: [
              { userId: 203, rating: 5.0, comment: "Perfect for work and gaming!" },
              { userId: 204, rating: 3.8, comment: "Good, but had some heating issues." }
            ],
            availability: "Pre-order",
          },
        ]
      },
      {
        id: 2,
        name: "Home Appliances",
        products: [
          {
            id: 201,
            name: "Air Conditioner",
            brand: "CoolBreeze",
            specifications: {
              power: "1.5 Ton",
              energyRating: "5 Star",
              noiseLevel: "Low",
              coolingCapacity: "5200W",
            },
            price: 499,
            reviews: [
              { userId: 205, rating: 4.2, comment: "Works well, energy-efficient." },
            ],
            availability: "In Stock",
          }
        ]
      }
    ]
  };
  
console.log(productCatalog.categories[0].products[1].price);

