const countLetters = function(arr){
  let result={};
  let arr1=[];
  arr1=arr.split(" ").join("");
  //console.log(arr1);
  let str2="";
  for(let str in arr1)
  {
    str2=arr1[str];
    //console.log(result[str2]);
    if(result[str2])
    {
      result[str2]+=1;
    }
    else
    {
      result[str2]=1;
    }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));