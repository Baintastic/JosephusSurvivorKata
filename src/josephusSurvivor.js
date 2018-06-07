function josephusSurvivor() {
    function josephus_survivor(noOfPeople, step) {
        let people = [];
        for (let i = 0; i < noOfPeople; i++) {
            people[i] = i + 1;
        }
        let index = 0;

        while (people.length > 1) {
            index = getNewIndex();
            people.splice(index, 1);
        }
        return people[0];

        function getNewIndex() {
            return (index + step - 1) % people.length;
        }
    }

    return {
        josephus_survivor: josephus_survivor
    }

}





