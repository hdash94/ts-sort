// import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { StringsCollection } from './StringsCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([5, 4, 3, 2, 1]);
const stringsCollection = new StringsCollection(['abc', 'ABC', 'xyz', 'XYZ']);
const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
numbersCollection.sort();
stringsCollection.sort();
linkedList.sort();
console.log(numbersCollection.data);
console.log(numbersCollection.data);
linkedList.print();
