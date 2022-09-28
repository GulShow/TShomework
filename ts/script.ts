//Task 2
interface user{
    name?:string,
    surname:string,
}

const obj:user = {
    name: 'John',
    surname: 'Smith'
}

obj.name = 'Pete';

delete obj.name

console.log(obj);

//Task 3
type arrNumbs = Array<number>

const arr:arrNumbs =  [1, 2, 3, -1, -2, -3];


    function pos(arr:arrNumbs):boolean {

        for (let i = 0; i < arr.length; i++) {
            if(arr[i] < 0) {
                return false
            }
        }
        return true
    }
console.log(pos(arr));
