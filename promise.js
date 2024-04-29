const data = new Promise((res,rej)=>{
    setTimeout(()=>{
        const name = 'Madhan'; 
        if (name){
            res(name);
        }
        else{
            rej('Error');
        }
    },2000);
});

function data_gen(name){
    const return_data = new Promise((res,rej)=>{
        const userdata = [{Name:"Madhan","age":29}];
        const result = userdata.find(user=>user.Name==name).age;
        if (result){
            res(result);
        }
        else{
            rej(result);
        }
    });
    return return_data;
}


// data.then((data)=>{
//     return data_gen(data)
// }).then((res_data)=>{
//     console.log(res_data);
// }).catch(()=>{
//     console.log('Error at data');
// }).finally(()=>{
//     console.log("final Block");
// });

async function process(){
    try{
        const res_data  = await data;
        console.log(res_data)
    }
    catch{
        console.log("Error");
    }
    finally{
        console.log('finaly_block')
    }
}

process()

console.log("not assync")