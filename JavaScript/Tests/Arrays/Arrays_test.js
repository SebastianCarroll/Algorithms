module("Testing RemoveDupsFromSortedArray");
test("Long list", function() {
    var dups = [1,2,2,2,3,4,5,5];
    var noDups = RemoveDupsFromSortedArray(dups);
    deepEqual(noDups, [1,2,3,4,5]);
});

test("Short list", function() {
    var dups = [1,2,2];
    var noDups = RemoveDupsFromSortedArray(dups);
    deepEqual(noDups, [1,2]);
});

test("Empty list", function() {
    var dups = [];
    var noDups = RemoveDupsFromSortedArray(dups);
    deepEqual(noDups, []);
});

test("No duplicates list", function() {
    var dups = [1,2,3,4,5];
    var noDups = RemoveDupsFromSortedArray(dups);
    deepEqual(noDups, [1,2,3,4,5]);
});

module("Testing incrementNumberAsArray");
test("Standard In", function() {
    var num = [1,0];
    var inc = incrementNumberAsArray(num);
    deepEqual(inc, [1,1]);
});

test("Small overflow", function() {
    var num = [9];
    var inc = incrementNumberAsArray(num);
    deepEqual(inc, [1,0]);
});

test("Large overflow", function() {
    var num = [9,9,9,9,9];
    var inc = incrementNumberAsArray(num);
    deepEqual(inc, [1,0,0,0,0,0]);
});

test("Large overflow", function() {
    var num = [1,3,8,7,0,2];
    var inc = incrementNumberAsArray(num);
    deepEqual(inc, [1,3,8,7,0,3]);
});