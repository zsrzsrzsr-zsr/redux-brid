let arr=[
  'hello',
  'hi'
]
const newarr = arr.map(
  t=>{
    console.log('xxxx',t);
    return `<li>${t}</li>`
  }
)
console.log(newarr);



let arr1 = [
   {
     id: '1',
     title: '课程1',
     likes: 2
   }, {
     id: '2',
     title: '课程2',
     likes: 3
   }
 ]

const  newarr1 = arr1.map(
  t=>{
    if(t.id==='1'){
      return {
        ...t,
        likes:t.likes +1
      }
    }
    return t
  }
)

console.log(newarr1);
