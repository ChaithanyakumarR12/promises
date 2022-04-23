let a=(name)=>{
    console.log("call back function from "+name);
}
let b=(name,callBack)=>{
    console.log(' name is '+name);
    callBack(name);
}
b("john",a);

function print(){
    setTimeout(() => {
        console.log(1);
    setTimeout(() => {
        console.log(2);
    setTimeout(() => {
        console.log(3);
    setTimeout(() => {
         console.log(4);
    setTimeout(() => {
         console.log(5);
    setTimeout(() => {
        console.log(6);
    setTimeout(() => {
        console.log(7);
}, 7000);
}, 6000);
}, 5000);
}, 4000);
}, 3000);
}, 2000);
}, 1000);
}
print();
const printNumber=()=>{
    return new Promise((resolve,reject)=>{
        resolve();
    })
}
printNumber().then(()=>{
    setTimeout(() => {
        console.log(1);
    }, 1000);
}).then(()=>{
    setTimeout(() => {
        console.log(2);
    }, 2000)
}).then(()=>{
    setTimeout(() => {
        console.log(3);
    }, 3000)
}).then(()=>{
    setTimeout(() => {
        console.log(4);
    }, 4000)
}).then(()=>{
    setTimeout(() => {
        console.log(5);
    }, 5000)
}).then(()=>{
    setTimeout(() => {
        console.log(6);
    }, 6000)
}).then(()=>{
    setTimeout(() => {
        console.log(7);
    }, 7000)
})

let c=(a)=>{
    return new Promise((resolve,reject)=>{
        a==="yes" ? resolve() : reject();
    }
    )
}

c("yes").then(()=>{
    console.log("resolved");
}).catch(()=>{
    console.log("rejected");
})

let d=(name)=>{
    console.log("call back function from "+name);
}

let E=(name,callBack)=>{
    console.log(' name is '+name);
    callBack(name);
}
E("john",d);

function print(){
setTimeout(() => {
console.log(1);
setTimeout(() => {
console.log(2);
setTimeout(() => {
console.log(3);
setTimeout(() => {
console.log(4);
setTimeout(() => {
console.log(5);
setTimeout(() => {
console.log(6);
setTimeout(() => {
console.log(7);
}, 7000);
}, 6000);
}, 5000);
}, 4000);
}, 3000);
}, 2000);
}, 1000);
}
print();

let print1=()=>{
    return new Promise((resolve,reject)=>{
        resolve();
    })
}

print1().then(()=>{
    console.log("resolved");
})

async function tryingPromises(){
    console.log("inside the function");
    const response =await fetch("https://api.github.com/users");
    console.log("Before response");
    const users = await response.json();
    console.log("users resolved");
    return users;

}

console.log("before calling the function");
let data = tryingPromises();
console.log("after calling the function");
console.log(data);
data.then((res)=>{
    console.log(res);
});
console.log("End of code");

let promise1= new Promise((resolve,reject)=>{
    resolve("promise1");
})

let promise2= new Promise((resolve,reject)=>{
    resolve("promise2");
})

let promise3= new Promise((resolve,reject)=>{
    resolve("promise3");
})

Promise.all([
    promise1,promise2,promise3
]).then(()=>{
    console.log(message);
})
