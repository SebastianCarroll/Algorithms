// TODO: Stop polluting global namespace and put these in something
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

function incrementNumberAsArray(num){
    // TODO: this reverses num aswell. Unexpected behaviour
    var revNum = num.reverse();
    for(var i=0; i<revNum.length; i++){
        var cur = revNum[i];
        if(cur == '9' || cur == 9){
            revNum[i] = 0;
            if(i===revNum.length-1){
                revNum.push(1);
                break;
            }
        } else {
            revNum[i] = revNum[i]+1;
            break;
        }
    }
    return revNum.reverse();
}