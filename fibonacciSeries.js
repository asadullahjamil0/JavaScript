function fibonacciGenerator(n) {

    if (n == 1) {
        output = [0];
    }

    else {
        var output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;

}

fibonacciGenerator(2);
