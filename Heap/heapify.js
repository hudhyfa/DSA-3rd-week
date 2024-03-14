function minHeapify() {

}

function maxHeapify(array, length, index) {
    let largestIndex = index;
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = leftChildIndex + 1;

    if(leftChildIndex < array.length && array[leftChildIndex] > array[largestIndex]) {
        largestIndex = leftChildIndex;
    }
    if(rightChildIndex < array.length && array[rightChildIndex] > array[largestIndex]) {
        largestIndex = rightChildIndex;
    }

    if(largestIndex !== index) {
        [array[largestIndex], array[index]] = [array[index], array[largestIndex]];
        maxHeapify(array, length, largestIndex);
    }

    return array;
}

function heapSort(arr) {
    if (arr.length < 2) return arr;
    let length = arr.length;
    let parentIndex = Math.floor((arr.length / 2) - 1);
    let lastChildIndex = arr.length - 1;

    while(parentIndex >= 0) {
        maxHeapify(arr, length, parentIndex);
        parentIndex --;
    }

    while(lastChildIndex >= 0) {
        [arr[lastChildIndex], arr[0]] = [arr[0], arr[lastChildIndex]];
        lastChildIndex --;
        maxHeapify(arr, lastChildIndex, 0);
    }

    return arr;
}

const result = heapSort([5,1,2,3,4]);
console.log(result);

// 7 8 6 5 4