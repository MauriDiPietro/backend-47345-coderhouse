const users = [
    {
        name: 'Francisco',
        age: 25,
        series: ['Breaking Bad', 'Game of Thrones']
    }, 
    {
        name: 'Federico',
        age: 30,
        series: ['El Encargado', 'Vikingos']
    }
];


users.forEach((user) => {
    user.age++, user.series.push('Casados con hijos')
});

console.log(users);
