module("Testing Insertion");
test("Initially empty tree", function() {
    var bst = new BST();
    bst.insert(new Node(null, 10));
    equal(10, bst.root.value);
});

test("Only root, node < root", function() {
    var bst = new BST();
    bst.insert(new Node(null, 10));
    bst.insert(new Node(null, 9));
    equal(9, bst.root.left.value);
});

test("Only root, node > root", function() {
    var bst = new BST();
    bst.insert(new Node(null, 10));
    bst.insert(new Node(null, 11));
    equal(11, bst.root.right.value);
});

