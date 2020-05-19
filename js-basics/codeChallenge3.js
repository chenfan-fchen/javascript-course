var john = {
    fullName : 'John Smith',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalValues: []
    // calcTips: function() {
    //     this.tips = [];
    //     this.finalValues = [];

    //     for (var i = 0; i < this.bills.length; i++) {
    //         var percentage;
    //         var bill = this.bills[i];
    //         if (bill < 50) {
    //             percentage = .2;
    //         } else if (bill >= 50 && bill <200) {
    //             percentage = .15;
    //         } else {
    //             percentage = .1;
    //         }
    //         // Add results to the corresponding arrays
    //         this.tips[i] = bill * percentage;
    //         this.finalValues[i] = bill + this.tips[i];
    //     }        

    // }
}

var mark = {
    fullName : 'Mark Miller',
    bills: [130, 58, 310],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill <200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + this.tips[i];
        }        

    }
}

function calcTips(object) {
    
    for (var i = 0; i < object.bills.length; i++) {
        // var tips = [];
        // var finalValues = [];
        var percentage;
        var bill = object.bills[i];
        if (bill < 50) {
            percentage = .2;
        } else if (bill >= 50 && bill <200) {
            percentage = .15;
        } else {
            percentage = .1;
        }
        // Add results to the corresponding arrays
        object.tips[i] = bill * percentage;
        object.finalValues[i] = bill + object.tips[i];        
    } 
}

function calcAverage (tips) {
    var sum = 0;
    for (var i = 0; i< tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
calcTips(john);
mark.calcTips();
// john.finalValues = [calcTips(john.bills).finalValues];
// mark.calcTips(mark.bills);
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john);
// console.log(mark);

if (john.average > mark.average) {
    console.log ('John\'s average point is bigger than Mark');
} else if (john.average < mark.average) {
    console.log('John\'s average point is smaller than Mark');
} else {
    console.log('John and Mark has the same average point');
}