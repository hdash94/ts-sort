"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringsCollection = void 0;
const Sorter_1 = require("./Sorter");
class StringsCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].charCodeAt(0) > this.data[rightIndex].charCodeAt(0);
    }
    swap(leftIndex, rightIndex) {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}
exports.StringsCollection = StringsCollection;
