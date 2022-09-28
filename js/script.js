"use strict";
const obj = {
    name: 'John',
    surname: 'Smith'
};
obj.name = 'Pete';
delete obj.name;
console.log(obj);
const arr = [1, 2, 3, -1, -2, -3];
function pos(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false;
        }
    }
    return true;
}
console.log(pos(arr));
