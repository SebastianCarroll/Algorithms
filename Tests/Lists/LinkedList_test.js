module("Testing Insertion");
test("Initially empty list", function() {
    var ll = new SLList();
    ll.insert(10);
    equal(ll.toString(), '[10]');
});
