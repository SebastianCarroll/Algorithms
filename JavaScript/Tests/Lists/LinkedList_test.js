module("Testing Insertion");
test("Initially empty list", function() {
    var ll = new SLList();
    ll.insert(10);
    equal(ll.toString(), '[10]');
});

test("Initially empty list", function() {
    var ll = new SLList();
    ll.insert(10);
    ll.insert(20);
    equal(ll.toString(), '[20][10]');
});

module("Testing Reverse");
test("Empty list", function() {
    var ll = new SLList();
    var rev = ll.reverse();
    equal(rev.toString(), '');
});

test("List of length 2", function() {
    var ll = new SLList();
    ll.insert(10);
    ll.insert(20);
    var rev = ll.reverse();
    equal(rev.toString(), '[10][20]');
});

test("Full list", function() {
    var ll = new SLList();
    ll.insertMany([10,20,30,40,50]);
    var rev = ll.reverse();
    equal(rev.toString(), '[10][20][30][40][50]');
});