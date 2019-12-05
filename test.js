const mode = (arr) => {
    let obj = {}
    let large = 0;
    let num;
    // let counter = 0
    arr.forEach(el => {
      if(obj[el]){
        obj[el]++
      } else {
        obj[el] = 1
      }
    })
    for(key in obj){
      if(obj[key] >= large){
        large = obj[key]
        // console.log(large + " large")
        num = key
      }
    //   console.log(obj[key])
    }
  return Number(num)
  }

  console.log(mode([1,2,3,4,5,2]))