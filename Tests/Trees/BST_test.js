module("Testing Insertion");
test("Initially empty tree", function() {
    var bst = new BST();
    bst.insert(10);
    equal(10, bst.root.value);
});

test("Only root, node < root", function() {
    var bst = new BST();
    bst.insert(10);
    bst.insert(9);
    equal(9, bst.root.left.value);
});

test("Only root, node > root", function() {
    var bst = new BST();
    bst.insert(10);
    bst.insert(11);
    equal(11, bst.root.right.value);
});

module("Testing Search");
test("Empty tree", function() {
    var bst = new BST();
    var found = bst.search(10);
    equal(found, null);
});

test("Only root", function() {
    var bst = new BST();
    bst.insert(10);
    var found = bst.search(10);
    equal(found.value, 10);
});

test("Large Tree - leaf", function() {
    var bst = new BST();
    bst.insert(10);
    bst.insert(1);
    bst.insert(100);
    bst.insert(30);
    bst.insert(12);
    bst.insert(11);
    var found = bst.search(11);
    equal(found.value, 11);
});

module("Testing Min");
test("Large Tree - leaf", function() {
    var bst = new BST();
    bst.insert(10);
    bst.insert(1);
    bst.insert(100);
    bst.insert(30);
    bst.insert(12);
    bst.insert(11);
    var min = bst.min();
    equal(min.value, 1);
});

test("Empty Tree", function() {
    var bst = new BST();
    var min = bst.min();
    equal(min.value, null);
});

module("Testing Max");
test("Large Tree", function() {
    var bst = new BST();
    bst.insert(10);
    bst.insert(1);
    bst.insert(100);
    bst.insert(30);
    bst.insert(12);
    bst.insert(11);
    var max = bst.max();
    equal(max.value, 100);
});

test("Empty Tree", function() {
    var bst = new BST();
    var max = bst.max();
    equal(max.value, null);
});

module("Testing Successor");
test("Large Tree", function() {
    var bst = new BST();
    bst.insertArr([10,1, 100, 30, 12,11]);
    var found = bst.search(10);
    var next = bst.successor(found);
    equal(next.value, 11);
});

test("Empty Tree", function() {
    var bst = new BST();
    var next = bst.successor(new Node(null, 10));
    equal(next, null);
});

test("Large Not Root", function() {
    var bst = new BST();
    bst.insertArr([10,1, 30, 100, 12,11,9]);
    var found = bst.search(9);
    var next = bst.successor(found);
    equal(next.value, 10);
});

module("Testing Predecessor");
test("Large Tree", function() {
    var bst = new BST();
    bst.insertArr([10,1, 100, 30, 12,11]);
    var found = bst.search(10);
    var prev = bst.predecessor(found);
    equal(prev.value, 1);
});

test("Empty Tree", function() {
    var bst = new BST();
    var prev = bst.predecessor(new Node(null, 10));
    equal(prev, null);
});

test("Large Not Root", function() {
    var bst = new BST();
    bst.insertArr([10,1, 30, 100, 12,11,9]);
    var found = bst.search(12);
    var prev = bst.predecessor(found);
    equal(prev.value, 11);
});

module("Testing Transplant");
test("Small Tree", function() {
    var bst = new BST();
    bst.insertArr([10,1, 30]);
    var found = bst.search(30);
    bst.transplant(bst.root, found);
    equal(bst.root.value, 30);
    equal(bst.search(10), null);
});

