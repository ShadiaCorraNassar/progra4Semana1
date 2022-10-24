let nums = [3,1,2,10,1]
let numsResultado=[]

numsResultado[0]= nums[0];
for(let cont=1; cont<nums.length; cont++){
   // console.log("Posicion "+cont+":"+nums[cont])
    let valorAcumulado = numsResultado[cont-1]
    numsResultado[cont]= valorAcumulado + nums[cont];
}
//podemos concatenar con +\
//consol.log("Input:"+nums)
//o podemos usar backtick
//consol.log(`Output:${numsResultado}`)

console.log("Input:"+nums)
console.log(`Output:${numsResultado}`)