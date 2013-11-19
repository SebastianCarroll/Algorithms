function RemoveDupsFromSortedArray(arr){
    var noDup = [];
    for(var i=1; i<arr.length; i++){
        var prev = arr[i-1];
        var cur= arr[i];
        if(prev !== cur){
            noDup.push(prev);
        }
        if(i === arr.length-1) noDup.push(cur);
    }
    return noDup;
}