describe("Testing task2", function() {
    describe("Sorting numbers", function() {
        var arr = [4, 5, 4, 6, 2, 7, 11, 43, 1];
        it("should be sorted asc", function() {
            numericSort(arr);
            expect(arr).toEqual([1, 2, 4, 4, 5, 6, 7, 11, 43]);
        });
		
        it("should be sorted desc", function() {
            numericSort(arr, "desc");
            expect(arr).toEqual([43, 11, 7, 6, 5, 4, 4, 2, 1]);
        });
    });
	
    describe("search index in array by value", function() {
        var arr = [1, 2, 4, 4, 5, 6, 7, 11, 43];
        it("should be found index by element", function() {
            expect(binSearch(arr, 6)).toEqual(5);
        });
		
        it("should not be found", function() {
            expect(binSearch(arr, 34)).toEqual(-1);
        });
    });
	
    describe("search pair sum in sorted array", function() {
        var arr = [1, 2, 4, 4, 5, 6, 7, 11, 43]
        it("should be found", function() {
            expect(findPairSum(arr, 15)).toBeTruthy();
        });
		
        it("should not be found", function() {
            expect(findPairSum(arr, 34)).toBeFalsy();
        });
    });
});