#include <stdio.h>
#include <time.h>

int gcd(int a, int b) {
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

int main() {
    clock_t start, end;
    double cpu_time_used;
    int a = 35, b = 15;

    // Start clock
    start = clock();

    // Calculate GCD
    int g = gcd(a, b);
    printf("GCD of %d and %d is: %d\n", a, b, g);

    // End clock
    end = clock();

    // Calculate CPU time used
    cpu_time_used = ((double)(end - start)) / CLOCKS_PER_SEC;

    // Print CPU time used
    printf("CPU time used: %f seconds\n", cpu_time_used);

    return 0;
}

