#include <stdio.h>
#include <time.h>
#include<stdlib.h>
int main() {
    int n;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];
   
    srand(time(NULL));
        for(int i=0;i<n;i++)
       {
        arr[i]=rand()%100;
       }
	printf("\nArray before sorting\n");
        for(int i=0;i<n;i++)
        printf("%d\t",arr[i]);

    int curr_size;
    int left_start;
    int temp[n];

    clock_t start, end;
    start = clock();

    for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
        for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
            int mid = left_start + curr_size - 1;
            if (mid >= n - 1)
                mid = n - 1;

            int right_end = left_start + 2 * curr_size - 1;
            if (right_end >= n - 1)
                right_end = n - 1;

            int i = left_start, j = mid + 1, k = left_start;

            while (i <= mid && j <= right_end) {
                if (arr[i] <= arr[j]) {
                    temp[k++] = arr[i++];
                } else {
                    temp[k++] = arr[j++];
                }
            }

            while (i <= mid)
                temp[k++] = arr[i++];

            while (j <= right_end)
                temp[k++] = arr[j++];

            for (i = left_start; i <= right_end; i++)
                arr[i] = temp[i];
        }
    }

    end = clock();

    printf("\nSorted array:\n");
    for (int i = 0; i < n; i++)
        printf("%d\t ", arr[i]);
    printf("\n");

    double time_taken = ((double)(end - start)) / CLOCKS_PER_SEC;
    printf("Time taken by merge sort: %f seconds\n", time_taken);

    return 0;
}
