//JS는 동기적임 -> 호이스팅 이후로 코드 작성 순서에 따라 동기적으로 동작 
//hositing: var, 함수 선언 등 선언들이 가장 상단으로 올라감 

console.log('1');
setTimeout(() => console.log('2'),1000);
console.log('3');


//콜백의 종류 두가지
//1. Synchronous callback(동기적 콜백)
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));
//2. Asynchronous callback(비동기적 콜백)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'),2000);


//3. callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'jjong' && password ==='in') ||
                (id === 'ssick' && password === 'jjong'
            )) {
                    onSuccess(id);
                } else {
                    onError(new Error('not found'));
                }
        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if (user === 'jjong') {
                onSuccess({name: 'jjong', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        },1000);
    }
}