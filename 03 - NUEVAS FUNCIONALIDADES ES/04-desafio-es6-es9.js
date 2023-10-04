const objects =  [
	{
		manzanas: 3,
		peras: 2,
		carne: 1,
		jugos: 5,
		dulces: 2
	},
	{
		manzanas: 1,
		sandias: 1,
		huevos: 6,
		jugos: 1,
		panes: 4
	}
];

const products = [];
let total = 0;

objects.forEach((item)=>{
    const keys = Object.keys(item);
    // console.log(keys);
    const values = Object.values(item);
    // console.log(values);
    keys.forEach((key)=>{
        if(!products.includes(key)) products.push(key);
    });
    for (const val of values) {
        total += val;
    };
});


console.log('total: ', total);
console.log('products: ', products);