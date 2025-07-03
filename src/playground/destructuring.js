console.log('destructuring');
const person = {
    name: 'PKT',
    age: 34,
    location: {
        city: 'Sembawang',
        temperature: 102
    }
};

//Object destructuring
const {name = 'Anonymous', age, location} = person;
//rename temperature to temp
const {city, temperature: temp} = person.location;
console.log(`${name} is ${age}. I live in ${location.city}`);
if (city && temp)
{
    console.log(`It's ${temp} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-published'} = book.publisher;
console.log(publisherName);

//array destructuring
const address = ['1299 S Juniper Street', 'Philadephia', 'Pennsylvania', '19147'];
const [,cityName, state] = address;
console.log(`You are in ${cityName} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium, large] = item;
console.log(`A medium ${coffee} costs ${medium}`);