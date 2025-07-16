#include <stdio.h>
#include <time.h>
#include<stdlib.h>
int main() {
    int  n;
	printf("enter the size of array\n");
	scanf("%d",&n); 
	int arr[n];
   	srand(time(NULL));
	for(int i=0;i<n;i++)
       {
 	arr[i]=rand()%100;
       }
	printf("\nArray before sorting\n");
	for(int i=0;i<n;i++)
	printf("%d\t",arr[i]);
    clock_t start = clock();
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }

    clock_t end = clock();

    double time_taken = ((double)end - start) / CLOCKS_PER_SEC;

    printf("\nSorted array:\n ");
    for (int i = 0; i < n; i++) {
        printf("%d\t ", arr[i]);
    }
    printf("\n");

    printf("Time taken to sort the array: %f seconds\n", time_taken);

    return 0;
}


