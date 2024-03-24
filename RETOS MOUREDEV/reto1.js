function main() {

    for (index in 1.100) {
        var divisibleByThree = index % 3 == 0
        var divisibleByFive = index % 5 == 0
        if (divisibleByThree && divisibleByFive) {
            println("fizzbuzz")
        } else if (divisibleByThree) {
            println("fizz")
        } else if (divisibleByFive) {
            println("buzz")
        } else {
            println(index)
        }
    }
}