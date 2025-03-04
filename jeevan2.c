#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool known(int a, int b) {
    int knows[4][4] = {
        {0, 1, 1, 1},
        {0, 0, 1, 0},
        {0, 0, 0, 0},
        {0, 1, 1, 0}
    };
    return knows[a][b];
}

int findC(int n) {    // C -> Celebrity
    int stack[n];
    int top = -1;

    for (int i = 0; i < n; i++) {
        stack[++top] = i;
    }

    while (top > 0) {
        int a = stack[top--];
        int b = stack[top--];

        if (known(a, b)) {
            stack[++top] = b;
        } else {
            stack[++top] = a;
        }
    }

    int pc = stack[top]; // PC -> potential Celebrity

    for (int i = 0; i < n; i++) {
        if (i != pc && (!known(i, pc) || known(pc, i))) {
            return -1;
        }
    }

    return pc;
}

int main() {
    int n = 4;
    int celebrity = findC(n);

    if (celebrity != -1) {
        printf("The celebrity is person %d\n", celebrity);
    } else {
        printf("No celebrity found\n");
    }

    return 0;
}