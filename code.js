"use strict"


const product = [1,2,3,4,5,6,6,1,2,7]
const product1 = product.sort()

const removeDup = []

for (let i = 0; i < product1.length; i++) {
    if (i < product1.length - 1) {
        if (product[i] != product1[i + 1]) {
            removeDup.push(product1[i])
        }
    } else {
        removeDup.push(product1[i])
    }
}

console.log(removeDup)


// Cloning And Resizing Array
const clone = ["flower", "yeast", "egg"]

const clone2 = [...clone]
const clone3 = clone.slice()
const clone4 = [].concat(clone)
const clone5 = Array.from(clone)
 
console.log(clone5)
console.log(clone.toString())
console.log(clone.join(" | "))

// Resize
clone.length = 4

console.log(clone)


// // Deleting  One important operation with arrays is the ability to delete data. The normal array delete methods will leave blank spaces in our array

const arr1 = [1,2,3,4,5];

let val = 1;
let count = 0;
let reduceLength = false;

for (let i = 0; i < arr1.length; i++) {
    if ( arr1[i] !== val ) {
        arr1[count++] = arr1[i]
    } else {
        reduceLength = true
    }

    if (reduceLength) {
        arr1.length -= 1
    }
}

console.log(arr1)


// Exercise on Array common methods
const integer = [1,2,3,4,5];

var evenCount = 0;
var oddCount = 0;

for (let vals of integer){
    if (vals % 2 === 0){
        evenCount += 1;
    }else{
        oddCount += 1;
    }
}
console.log(evenCount);
console.log(oddCount);


//  Multidimensional Arrays
const meal = [["Rice","Beans","Eggs"], ["water","soda","water"]]

console.table(meal)

const test = [[1,2],[3,4]]
for ( let i = 0; i < test.length; i++) {
    for (let j = 0; j < i; j++) {
        const temp = test[i][j]
        test[i][j] = test[j][i]
        test[j][i] = temp
    }
} 
console.log(test)


// iNTERVIEW QUestion, what is the number that is not in the number array
const number = []
for (let i = 0; i <= 100; i++) {
    if(i != 50) {
       number.push(i)
    }
}

let total = 0;
for (let i = 0; i < number.length; i++) {
    total += number[i]
}

console.log(5050 - total)



// min and max value
const value = [4,10,3,11,2,15,3]
let minValue = value[0]

for (let i = 0; i < value.length; i++) {
    if (minValue > value[i]) {
        minValue = value[i]
    }
}

console.log(minValue)



// Setter and Getters

const user = {
    username: "Adekunle",

    get use() {
        return this.username
    },

    set use(use) {
        if(use != "") {
            this.username = use
        }
    }
}       

console.log(user.username)




class Stack {
    constructor() {
        this.stack = []
    }
    isEmpty(){
        return this.stack.length = 0
    }
    size(){
        return this.stack.length
    }
    push(val){
        this.stack.push(val)
    }
    pop(){
        this.stack.pop()
    }
    peek(){
        return this.stack[this.stack.length - 1]
    }
    print(){
        console.log(this.stack)
    }
}

var s = new Stack()
s.push(1)
s.push(2)
s.push(3)
s.print()

// Node Method
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next
    }
}

class Stack1 {
    constructor() {
        this.top = new Node(null, null)
        this.size = 0;
    }
    push(val) {
        var isNode = new Node(val, this.top)
        this.top = isNode;
        this.size++
    }
    peek() {
        if(this.size > 0) {
            return this.top.value
        } else {
            throw "Stack Underflow"
        }
    }
    pop() {
        if(this.size > 0) {
            var retVal = this.top.value;
            this.top = this.top.next;
            this.size--
            return retVal
        } else {
            throw "Stack Underflow"
        }
    }
    isEmpty() {
        return this.size == 0;
    }
    print() {
        var holder = this.top;
        while(holder.next != null) {
            console.log(holder.value);
            holder = holder.next;
        }
    }
}

// Reverse Method
function reverseStack(s) {
    var vals = []

    while(!s.isEmpty()) {
        vals.push(s.pop())
    }

    for(let i = 0;  i < vals.length; i++) {
        s.push(vals[i])
    }

    return s
}

var s = new Stack1()
s.push(1);
s.push(2);
s.print();

s = reverseStack(s)
s.print();


// Undo and Redo
var undoStack = new Stack;
var redoStack = new Stack;
var counter = 0;

function incrementCounter() {
    undoStack.push(counter)
    counter++;
    document.getElementById("val").value = counter
}

function undo() {
    redoStack.push(counter);
    counter = undoStack.pop()
    document.getElementById("val").value = counter
}

function redo() {
    undoStack.push(counter);
    counter = redoStack.pop()
    document.getElementById("val").value = counter
}


// // Interview question  Solving the Balanced Bracket Problem
var bracketStack = new Stack()
var testString = "(1+2)"
var valid = true
var i = 0;

while (i < testString.length && valid) {
    var charVal = testString.charAt(i)

    if(charVal == "(") {
        bracketStack.push(charVal)
    } else if (charVal == ")") {
        if(!bracketStack.isEmpty()){
            bracketStack.pop()
        } else {
            valid = false
        }
    }

    i++
}

if(!bracketStack.isEmpty()) {
    valid = false
}

console.log(valid)



// Solving the Polindrome Problem
var reverseString = new Stack()
var poliTest = "racecar"

for(var i =0; i < poliTest.length; i++) {
    reverseString.push(poliTest.charAt(i)) 
}

var valid = true;
var i = 0

while (reverseString.size > 0 && valid) {
    var charVal = reverseString.pop()

    if(charVal != poliTest.charAt(i)) {
        valid = false
    }

    i++
}

console.log(valid)



// What is Queue: Queue is a data structure that stores data in First in First Out (FIFO) fomat.
// Array based approach queue

class Queue {
    constructor() {
        this.queue = []
        this.front = 0;
        this.rear = 0;
    }

    enqueue(val) {
        this.queue[this.rear] = val
        this.rear++;
    }

    dequeue() {
        if(this.queue.length > 0) {
            var val = this.queue[this.front]
            delete this.queue[this.front]
            this.front++
            return val
        } else {
            throw "Stack Underflow"
        }
    }

    peek() {
        return this.queue[this.front]
    }

    length() {
        return this.queue.length
    }

    isEmpty() {
        return this.queue.length == 0
    }

    print() {
        console.log(this.queue)
    }
}

var q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.print()

q.dequeue()
q.print()


// Node based approach queue
class Node1{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class Queue1 {
    constructor() {
        this.front = new Node(null, null)
        this.rear = new Node(null, null)
        this.size = 0
    }

    enqueue(val) {
        var inNode = new Node(val, null)

        if(this.size == 0) {
            this.front = this.rear = inNode
            this.size++
        } else {
            this.rear.next = inNode
            this.rear = inNode
            this.size++
        }
    }

    dequeue() {
        if(this.size == 0) {
            throw "Stack Underflow"
        } else {
            var val = this.front.value
            this.front = this.front.next
            this.size--
            return val
        }
    }

    peck() {
        if(this.size == 0){
            throw "Stack Underflow"
        } else {
            return this.front.value
        }
    }

    isEmpty() {
        return this.size == 0
    }

    print() {
        var holder = this.front

        while(holder != null) {
            console.log(holder.value)
            holder = holder.next
        }
    }
}

var q = new Queue1()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.print()




// // Linked List, has two ways 1. Singly and Doubling Linked List
// Singly Linked List
class Node2 {
    constructor(value, next){
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.front = new Node2(null, null)
        this.size = 0;
    }

    insertFront(val) {
        var nodeIn = new Node2(val, this.front)
        this.front = nodeIn
        this.size++
    }

    print() {
        var holder = this.front

        while(holder.next != null) {
            console.log(holder.value)
            holder = holder.next
        }
    }

    insert(val, index) {
        if(index > this.size) {
            throw "IndexOfRange"
        } else {
            if(index == 0) {
                this.insertFront(val)
            } else {
                var i = 0;
                var holder = this.front

                while(i < index - 1) {
                    holder = holder.next
                    i++
                }

                var newNode = new Node2(val, holder.next)
                holder.next = newNode
                this.size++
            }
        }
    }

    deleteFront() {
        this.front = this.front.next
        this.size--
    }

    delete(index) {
        if(index > this.size) {
            throw "IndexOfRange"
        } else {
            if(index == 0) {
                this.deleteFront()
            } else {
                var i = 0
                var holder = this.front

                while(i < index - 1) {
                    holder = holder.next
                    i++
                }

                holder.next = holder.next.next
                this.size--
            }
        }
    }
}

var l = new LinkedList()
l.insertFront(1)
l.insertFront(2)
l.insert(3,1)
l.print()



// Doubly Linked List

class Node3 {
    constructor(value, next, prev){
        this.value = value
        this.next = next
        this.prev = prev
    }
}

class LinkedList2 {
    constructor() {
        this.front = new Node3(null, null, null)
        this.rear = new Node3(null, null, null)
        this.size = 0;
    }

    insertFront(val) {
        var nodeIn = new Node3(val, null, null)

        if(this.size == 0) {
            this.front = this.rear = nodeIn
        } else {
            nodeIn.next = this.front
            this.front.prev = nodeIn

            this.front = nodeIn
        }

        this.size++
    }

    print() {
        var holder = this.front

        while(holder != null) {
            console.log(holder.value)
            holder = holder.next
        }
    }

    insert(val, index) {
        if(index > this.size) {
            throw "IndexOfRange"
        } else {
            if(index == 0) {
                this.insertFront(val)
            } else {
                var i = 0;
                var holder = this.front

                while(i < index - 1) {
                    holder = holder.next
                    i++
                }

                var newNode = new Node3(val, holder.next, holder)

                if(holder.next != null) {
                    holder.next.prev = newNode
                }

                holder.next = newNode
                this.size++
            }
        }
    }

    deleteFront() {
        this.front = this.front.next
        this.size--
    }

    delete(index) {
        if(index > this.size) {
            throw "IndexOfRange"
        } else {
            if(index == 0) {
                this.deleteFront()
            } else {
                var i = 0
                var holder = this.front

                while(i < index - 1) {
                    holder = holder.next
                    i++
                }

                holder.next.next.prev = holder
                holder.next = holder.next.next
                this.size--
            }
        }
    }

    printReverse() {
        var holder = this.rear

       while(holder != null) {
            console.log(holder.value)
            holder = holder.prev 
        }
    }

    printMiddle() {
        var fast = this.front
        var slow = this.front

        while(fast != null && fast.next != null) {
            fast = fast.next.next
            slow = slow.next
        }

        console.log(slow.value)
    }
}

var l = new LinkedList2()
l.insertFront(1)
l.insertFront(2)
l.insert(3,1)
// l.delete(1)
// l.print()

// l.printReverse()
l.printMiddle()




// Hash Table
class HashTable {
    constructor(size) {
        this.size = size;
        this.values = {};
    }

    calculateHash(value) {
        return value % this.size
    }

    addValue(value) {
        var hash = this.calculateHash(value)

        if(this.values[hash] === undefined) {
            this.values[hash] = value
        } else {
            var iters = 0;

            while(this.values[hash] !== undefined && iters <= this.size) {
                hash += 1;
                hash = hash % this.size;
                iters += 1;
            }

            if(iters > this.size) {
                throw "Stackoverflow"
            } else {
                this.value[hash] = value
            }
        }
    }

    contains(value) {
        var hash = this.calculateHash(value)

        if(this.values[hash] === value) {
            return true
        } else {
            var iters = 0;

            // Linear Probing
            while(this.values[hash] !== value && iters <= this.size){
                hash += 1;
                hash = hash % this.value
                iters += 1
            }

            if(this.values[hash] === value) {
                return true
            } else {
                return false
            }
        }
    }

    print() {
        console.log(this.values)
    }
}

var h = new HashTable(51)
h.addValue(8)
h.addValue(4)
h.addValue(12)

console.log(h.contains(4))
console.log(h.contains(115))
h.print()

// Removing Duplicate
var arr = [1,1,22,2,2,3,4,4,12,15]
var retArr = []

for(var i = 0; i < arr.length; i++) {
    var v = arr[i]

    if(!h.contains(v)){
        h.addValue(v)
        retArr.push(v)
    }
}

console.log(retArr)

// Calculating Interception
var arr2 = [1,2,3,3,4,4,5]
var arr3 = [1,2,3,7,6,67]

var intercept = []

for(var i = 0; i < arr2.length; i++) {
    var v = arr2[i]
    if(!h.contains(v)){
        h.addValue(v)
    }
}

for(var i = 0; i < arr3.length; i++) {
    var v = arr3[i]
    if(h.contains(v)){
        intercept.push(v)
    }
}

console.log(intercept)


// Implementing Browser Local Storage
class HashTable1 {
    constructor(size) {
        this.size = size;
        this.values = {};
    }

    calculateHash(value) {
        var sum = 0

        for(var i = 0; i < value.length; i++) {
            var  charCode = value.charCodeAt(i)
            sum += charCode
        }

        return sum % this.size
    }

    addValue(key, value) {
       var hash = this.calculateHash(key)
       this.values[hash] = value
    }

    getItem(key) {
        var hash = this.calculateHash(key)
        return this.values[hash]
    }

    print() {
        console.log(this.values)
    }
}

var h = new HashTable1(51)
h.addValue("Hello", "World")
console.log(h.getItem("Hello"))



// Implementation of Graph
// Graph is a way of represention relationship between entities, node represent a single entity and Edge represent relationshipbetween entities.

// Undirected Graph
class Graph{
    constructor(){
        this.adjList = new Map();
    }

    addEdgeHelper(node, adj, weight){
        if(this.adjList.has(node)){
            var currSet = this.adjList.get(node)
            currSet.add({adj, weight})
            this.adjList.set(node, currSet)
        } else {
            this.adjList.set(node, new Set([{adj, weight}]))
        }
    }

    addEdge(node, adj, weight){
        this.addEdgeHelper(node,adj,weight)   
    }

    getEdges(node){
        return this.adjList.get(node)
    }

    getAllNodes(){
        return Array.from(this.adjList.keys( ))
    }

    print(){
        console.log(this.adjList)
    }
}

var g = new Graph();
g.addEdge(0,1,0)
g.addEdge(0,2,0)
g.addEdge(1,2,0)

g.print()


// Priority Queue
// In the the priority queue, the highest priority value is remove first
class GraphNode{
    constructor(name, weight){
        this.name = name
        this.weight = weight
    }
}

class PriorityQueue{
    constructor(){
        this.items =  [];
    } 

    enqueue(element, weight){
        var graphNode = new GraphNode(element, weight)
        var contain = false;
        var i = 0

        while (i < this.items.length && !contain){
            if(this.items[i].weight > graphNode.weight){
                this.items.splice(i,0,graphNode);
                contain =  true;
            }
            i++
        }

        if(!contain) {
            this.items.push(graphNode);
        }
    }

    dequeue(){
        if(this.items.length === 0){
            throw "StackUnderflow"
        } else {
            return this.items.shift()
        }
    }

    isEmpty() {
        return this.items == 0
    }

    print(){
        console.log(this.items)
    }
}

var pq = new PriorityQueue()
pq.enqueue(1,10)
pq.enqueue(2,5)
pq.enqueue(3,0)
pq.enqueue(4,20)
pq.print()


// Dijkstra's Algorithm
// Understanding the Path: A path is a sequence of edges that takes you from the starting Node to the ending Node 
class Graph1{
    constructor(){
        this.adjList = new Map();
    }

    addEdgeHelper(node, adj, weight){
        if(this.adjList.has(node)){
            var currSet = this.adjList.get(node)
            currSet.add({adj, weight})
            this.adjList.set(node, currSet)
        } else {
            this.adjList.set(node, new Set([{adj, weight}]))
        }
    }

    addEdge(node, adj, weight){
        this.addEdgeHelper(node,adj,weight) 
        if (adj != node){
            this.addEdgeHelper(node,adj,weight) 
        }  
    }

    getEdges(node){
        return this.adjList.get(node)
    }

    getAllNodes(){
        return Array.from(this.adjList.keys( ))
    }

    print(){
        console.log(this.adjList)
    }
}

function dijkstra(g,source){
    let distances = {}
    let prev = {}
    let pq = new PriorityQueue()

    distances[source] = 0
    pq.enqueue(source, 0)

    var allNodes = g.getAllNodes();

    for(var i = 0; i<allNodes.length; i++){
        if (allNodes[i] !== source){
            distances[allNodes[i]] = Infinity
        }

        prev[allNodes[i]] = null;
    }

    while (!pq.isEmpty()){
        let minNode = pq.dequeue();
        let currNode = minNode.name

        let adjList = g.getEdges(minNode.name);

        for(const [key, value] of adjList.entries()){
            let alt = distances[currNode] + key.weight

            if (alt < distances[key.adj]){
                distances[key.adj] = alt
                prev[key.adj] = currNode;

                pq.enqueue(key.adj, distances[key.adj])
            }
        }
    }

    console.log("Distances:", distances)
}
 
var g = new Graph()
g.addEdge(0,1,13)
g.addEdge(0,2,14)
g.addEdge(0,3,30)
g.addEdge(3,4,12)

dijkstra(g,0)


// Recursion: is when a function reference itself
function sumToNRec(n){
    if(n == 1){
        return 1
    }else {
        return n + sumToNRec(n-1)
    }
}

console.log("Recursion:", sumToNRec(3))


// Degrees of a Graph: Degree is the number of edges that contain node
function degree(g){
    var nodes = g.getAllNodes()
    var degrees =  new Map()

    for(var i = 0; i < nodes.length; i++){
        var adj = g.adjList.get(nodes[i])

        for (const [key, value] of adj.entries()){
            if(degrees.has(key.adj)){
                degrees.set(key.adj, degrees.get(key.adj))
            } else {
                degrees.set(key.adj, 1 )
            }
        }
    }

    console.log(degrees)
}

var g = new Graph()
g.addEdge(0,1,13)
g.addEdge(0,2,14)
g.addEdge(0,3,30)
g.addEdge(3,4,12)

degree(g)




// What is Tree? A tree is a special kind of graph with some associated properties
// 3 property considered *Undirected *The graph is connected *The graph is acyclic: is a graph without cycles
// A Binary Search Tree (BST) is a tree data structure with a few more properties, in order to make it efficient for searching

// Implementing a Tree
class Node4 {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Bst{
    constructor(){
        this.root = null;
    }

    insertNode(node,newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null){
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    insert(data){
        var newNode = new Node4(data)

        if (this.root === null){
            this.root = newNode 
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    inOrderRec(node){
        if(node !== null){
            this.inOrderRec(node.left)
            console.log(node.data)
            this.inOrderRec(node.right)
        }
    }

    inOrder(){
         this.inOrderRec(this.root)
    }

   

    // Traversal (Preorder and Postorder)
    preOrderRec(node){
        if(node !== null){
            console.log(node.data)
            this.preOrderRec(node.left)
            this.preOrderRec(node.right)
        }
    }

    preOrder(){
         this.preOrderRec(this.root)
    }

    postOrderRec(node){
        if(node !== null){
            this.postOrderRec(node.left)
            this.postOrderRec(node.right)
            console.log(node.data)
        }
    }

    postOrder(){
         this.postOrderRec(this.root)
    }
    // End of Traversy



    containsRec(node, data){
        if (node === null){
            return false
        }else if (data < node.data){
            return this.containsRec(node.left, data)
        } else if(data > node.data){
            return this.containsRec(node.right, data)
        } else{
            return true
        }
    }

    contains(data){
        return this.containsRec(this.root, data)
    }

    findMinNode(node){
        if(node.left === null){
            return node;
        }else{
            return this.findMinNode(node.left)
        }
    }

    removeNode(node, key){
        if (node === null){
            return null
        } else if(key < node.data){
            node.left = this.removeNode(node.left, key)
            return node
        } else if(key > node.data){
            node.right = this.removeNode(node.right, key)
            return node;
        } else{
            if(node.left === null && node.right === null){
                node = null
                return node;
            }

            if(node.left === null){
                node = node.right;
                return node
            }

            if(node.right === null){
                node = node.left;
                return node
            }

            var aux = this.findMinNode(node.right)
            node.data = aux.data

            node.right = this.removeNode(node,right, aux.data)
            return node
        }
    }

    remove(data){
        this.root = this.removeNode(this.root, data)
    }
}

var t = new Bst()
t.insert(10)
t.insert(5)
t.insert(15)
console.log("------In Order-------")
t.inOrder()
console.log("------Pre Order-------")
t.preOrder()
console.log("------Post Order-------")
t.postOrder()



// Traversals, how to create traversal?
// 1. Preorder Traversal: iterate based on the order they appear on the tree itself
// 2. Postorder Traversal: iterate the left-hand iside first, followed by right-hand side amd lastly, the roots