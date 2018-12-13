function numericSort(array, direction = "asc") {
    var factor = 1.3;
    var step = Math.floor(array.length / factor);
    var compare = (direction == "desc") ? (a, b) => {return b > a} : (a, b) => {return a > b};
    var box;
    while (step > 0) {
        for(var i = 0; i < array.length - step; i++) {
            if(compare(array[i], array[i + step])) {
                 box = array[i];
                 array[i] = array[i + step];
                 array[i + step] = box;
            }
        }
        step = Math.floor(step / factor);
    }
}

function binSearch(array, value) {
    var bis = function (array, start, end, value) {
        if (start < 0 || end < 0) 
            return -1;
        if (array[start] == value) 
            return start;
        if (array[end] == value) 
            return end;

        var middlePos = Math.floor((end + start) / 2);
        var middleElement = array[middlePos];
  
        if (value > middleElement)
            return bis(array, middlePos, end - 1, value);
        else if (value < middleElement)
            return bis(array, start, middlePos - 1, value);
        else if (array[middlePos] == value) 
            return middlePos;
        else 
            return -1;
    }
    return bis(array, 0, array.length - 1, value);
}

function findPairSum(array, value) {
    var fps = function (value, array, start = 0, end = array.length - 1) {
        if(end < start || array[start] >= value || array[end] * 2 < value)
            return false;
        while(start < end && array[start] + array[end] != value) {
            if (array[start] + array[end] > value)
                end--;
            else
                start++;
        }
        return start < end;
    }
    var temp = array.slice(0);
    numericSort(temp);
    return fps(value, temp);
}