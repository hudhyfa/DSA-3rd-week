class Heap {
    constructor() {
        this.data = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return i * 2 + 1;
    }

    getRightChildIndex(i) {
        return i * 2 + 2;
    }

    push(val) {
        this.data[this.data.length] = val;
        this.heapifyUp();
    }
    
    heapifyUp() {
        let currentIndex = this.data.length - 1;
        while(this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    poll() {
        if(this.data.length === 0) return -1;
        this.data[0] = this.data[this.data.length - 1];
        this.data.length--;
        this.heapifyDown();
        return;
    }
    
    heapifyDown() {
        let currentIndex = 0;
        while(this.getLeftChildIndex(currentIndex) < this.data.length) {
            let leftChildIndex = this.getLeftChildIndex(currentIndex);
            let rightChildIndex = this.getRightChildIndex(currentIndex);
            let biggestChildIndex = leftChildIndex;
            if(rightChildIndex < this.data.length && this.data[rightChildIndex] > this.data[leftChildIndex]) {
                biggestChildIndex = rightChildIndex;
            }
            if(this.data[currentIndex] < this.data[biggestChildIndex]) {
                this.swap(currentIndex, biggestChildIndex);
                currentIndex = biggestChildIndex;
            } else {
                return;
            }
        }
    }

    swap(indexOne, indexTwo) {
        const temp = this.data[indexOne];
        this.data[indexOne] = this.data[indexTwo];
        this.data[indexTwo] = temp;
    }

    show() {
        console.log(this.data);
    }

    heapSort() {
        let lastChildIndex = this.data.length - 1;

        while(lastChildIndex >= 0) {
            [this.data[lastChildIndex], this.data[0]] = [this.data[0], this.data[lastChildIndex]];
            this.heapify(lastChildIndex, 0);
            lastChildIndex --;
        }

        console.log(this.data);
    }

    heapify(length, parentIndex) {
        let largestIndex = parentIndex;
        let leftChildIndex = parentIndex * 2 + 1;
        let rightChildIndex = leftChildIndex + 1;

        if(leftChildIndex < length && this.data[leftChildIndex] > this.data[largestIndex]) {
            largestIndex = leftChildIndex;
        }
        if(rightChildIndex < length && this.data[rightChildIndex] > this.data[largestIndex]) {
            largestIndex = rightChildIndex;
        }

        if(parentIndex !== largestIndex) {
            [this.data[parentIndex], this.data[largestIndex]] = [this.data[largestIndex], this.data[parentIndex]];
            this.heapify(length, largestIndex);
        }

        return this.data;
    }
}

let heap = new Heap();
heap.push(100);
heap.push(80);
heap.push(60);
heap.push(40);
heap.push(20);
heap.push(0);
heap.show();

// heap.poll();
// heap.poll();
// heap.poll();
heap.heapSort();
