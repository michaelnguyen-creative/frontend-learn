/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore<T> {

    private _data: Array<T> = new Array(10);
    
    AddOrUpdate(index: number, item: T) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        } else {
            alert('Index is greater than 10')
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }
}

let cities = new DataStore<string>();

cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London");       // item not added

const p = document.createElement('p')
const city = cities.GetData(1);
p.innerText = (typeof city === 'string') ? `The first city is ${city}` : '';
document.body.appendChild(p)

console.log(cities.GetData(1));         // returns 'Chicago'
console.log(cities.GetData(12));        // returns 'undefined'

// TODO Test items as numbers.
let emptyIds = new DataStore<number>();
emptyIds.AddOrUpdate(0, 10);
emptyIds.AddOrUpdate(1, 20);
emptyIds.AddOrUpdate(10, 30); // err

console.log('index0', emptyIds.GetData(0));
console.log('index1', emptyIds.GetData(1));
console.log('index10', emptyIds.GetData(10)); // undefined

// TODO Test items as objects.
type Pets = {
    name: string;
    breed: string;
    age: number
}
let pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5});
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3});
console.log(pets.GetData(1));         // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }