/* let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
}
 */

function out(){
    x=10
    function inner(){
        return x
    }
    return inner
}
console.log((out())());


