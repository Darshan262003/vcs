#include <stdio.h>
#include <stdlib.h>

// Node structure
struct Node {
    int data;
    struct Node* next;
};

// Insert a node at the end
void insert(struct Node** head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;

    if (*head == NULL) {
        *head = newNode;
    } else {
        struct Node* temp = *head;
        while (temp->next) temp = temp->next;
        temp->next = newNode;
    }
}

// Swap adjacent nodes
struct Node* swapPairs(struct Node* head) {
    if (!head || !head->next) return head; // No swap needed

    struct Node* newHead = head->next; // Second node becomes the new head
    struct Node* temp = head, *prev = NULL;

    while (temp && temp->next) {
        struct Node* nextPair = temp->next->next;
        struct Node* second = temp->next;

        second->next = temp; // Swap
        temp->next = nextPair;

        if (prev) prev->next = second; // Connect previous pair
        prev = temp;
        temp = nextPair;
    }

    return newHead;
}

// Print the list
void printList(struct Node* head) {
    while (head) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

// Main function
int main() {
    struct Node* head = NULL;
    int n, value;

    printf("Enter number of nodes: ");
    scanf("%d", &n);

    printf("Enter elements: ");
    while (n--) {
        scanf("%d", &value);
        insert(&head, value);
    }

    printf("Original List: ");
    printList(head);

    head = swapPairs(head);

    printf("Swapped List: ");
    printList(head);

    return 0;
}