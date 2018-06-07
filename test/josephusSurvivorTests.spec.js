describe("JosephusPermutation", function () {
		
			describe("Given only 1 person in a circle who's the only survivor", function () {
				it("should return 1", function() {
					// arrange
					var permutation = new josephusSurvivor();
					// act
					var actual = permutation.josephus_survivor(1,1);
					// assert
					expect(actual).toBe(1);
					});
			})

			describe("Given 2 people in a circle where the 2nd person is eliminated", function () {
				it("should return 1", function() {
					// arrange
					var permutation = new josephusSurvivor();
					// act
					var actual = permutation.josephus_survivor(2,2);
					// assert
					expect(actual).toBe(1);
					});
			})

			describe("Given 3 people in a circle where every 2nd person is eliminated", function () {
				it("should return 3", function() {
					// arrange
					var permutation = new josephusSurvivor();
					// act
					var actual = permutation.josephus_survivor(3,2);
					// assert
					expect(actual).toBe(3);
					});
			})

			describe("Given 4 people in a circle where every 2nd person is eliminated", function () {
				it("should return 1", function() {
					// arrange
					var permutation = new josephusSurvivor();
					// act
					var actual = permutation.josephus_survivor(4,2);
					// assert
					expect(actual).toBe(1);
					});
			})
			describe("Given 5 people in a circle where every 2nd person is eliminated", function () {
				it("should return 3", function() {
					// arrange
					var permutation = new josephusSurvivor();
					// act
					var actual = permutation.josephus_survivor(5,2);
					// assert
					expect(actual).toBe(3);
					});
			})

			describe("Given 6 people in a circle where every 3rd person is eliminated", function () {
				it("should return 3", function() {
					// arrange
					var permutation = new josephusSurvivor();
					// act
					var actual = permutation.josephus_survivor(6,3);
					// assert
					expect(actual).toBe(1);
					});
			})

			describe("Given 7 people in a circle where every 3rd person is eliminated", function () {
				it("should return 4", function() {
					// arrange
					var permutation = new josephusSurvivor();
					// act
					var actual = permutation.josephus_survivor(7,3);
					// assert
					expect(actual).toBe(4);
					});
			})


			describe("Given 21 people in a circle where every 7th person is eliminated", function () {
				it("should return 10", function() {
					// arrange
					var permutation = new josephusSurvivor();
					// act
					var actual = permutation.josephus_survivor(21,7);
					// assert
					expect(actual).toBe(10);
					});
			})

		
  
});
