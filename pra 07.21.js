/**
 * Created by huadu on 7/21/17.
 */
var arr1=[1,2,3];
var arr2=[100,2,1,10]

function flatter(arr) {
    let flatteredarr=arr.join(",").split(",");
    for (let i=0;i<flatteredarr.length;i++){
        flatteredarr[i]=parseInt(flatteredarr[i]);
    }
    return flatteredarr;
}

// console.log(flatter(arr1))
function same(arr1,arr2) {
    let same=[];
    for (let i=0;i<arr1.length;i++){
        for (let j=0;j<arr2.length;j++){
            if (arr1[i]===arr2[j]){
                same.push(arr2[j]);
                break;
            }else {continue}
        }
    }
    return same;
}
console.log(same(arr1,arr2));

function difference(arr1,arr2) {
    let samearr = same(arr1,arr2);
    let diff=[];

    return diff;
}
console.log(difference(arr1,arr2))