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
})
