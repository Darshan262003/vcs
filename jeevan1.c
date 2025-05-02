#include <stdio.h>


void push(int x) {
    if (top == size - 1) {
        printf("Stack is full\n");
        return;
    }
    stack[++top] = x;
    mid = top / 2;
    printf("%d pushed\n", x);
}

void pop() {
    if (top == -1) {
        printf("Stack is empty\n");
        return;
    }
    printf("%d popped\n", stack[top--]);
    if (top == -1) 
    {
        mid = -1;
    }
    else
    {
        mid = top / 2;
    }

}

void getMid() {
    if (mid == -1) {
        printf("Stack is empty\n");
    } else {
        printf("Middle element: %d\n", stack[mid]);
    }
}

void delMid() {
    if (mid == -1) {
        printf("Stack is empty\n");
        return;
    }
    printf("Middle element %d deleted\n", stack[mid]);
    for (int i = mid; i < top; i++) {
        stack[i] = stack[i + 1];
    }
    top--;
        if (top == -1) 
    {
        mid = -1;
    }
    else
    {
        mid = top / 2;
    }
}

void display() {
    if (top == -1) {
        printf("Stack is empty\n");
        return;
    }
    for (int i = top; i >= 0; i--) {
        printf("%d ", stack[i]);
    }
    printf("\n");
}

int main() {
    int ch, x;
    printf("Enter stack size: ");
    scanf("%d", &size);
    initStack(size);

    while (1) {
        printf("\n1.Push 2.Pop 3.GetMid 4.DelMid 5.Display 6.Exit\nChoice: ");
        scanf("%d", &ch);
        if (ch == 6) break;

        switch (ch) {
            case 1: printf("Enter element: "); scanf("%d", &x); push(x); break;
            case 2: pop(); break;
            case 3: getMid(); break;
            case 4: delMid(); break;
            case 5: display(); break;
            default: printf("Invalid choice\n");
        }
    }

    free(stack);
    return 0;
}