#include <stdio.h>
#include<stdlib.h>
#include<time.h>
void main(){
   int n;
    clock_t start,end;
    double cpu_time_used;

  printf("Enter the size of the array\n");
  scanf("%d",&n);
 //  int arr[5] = {67, 44, 82, 17, 20};
   int arr[n];
  srand(time(NULL));
  for(int i=0;i<n;i++)
  {
   arr[i]=rand()%100;
  }
   printf("Array before Sorting: ");
   for(int i = 0; i<n; i++)
      printf("%d ",arr[i]);
   printf("\n");
  // insertionSort(arr, n);
   int key, j;
   start=clock();
   for(int i = 1; i<n; i++) {
      key = arr[i]; 
      j = i;
      while(j > 0 && arr[j-1]>key) {
         arr[j] = arr[j-1];
         j--;
      }
      arr[j] = key;
  }
  end=clock();
   printf("Array after Sorting: ");
   for(int i = 0; i<n; i++)
      printf("%d ", arr[i]);
   printf("\n");
    cpu_time_used=((double)(end-start))/CLOCKS_PER_SEC;
    printf("\nTime taken for multiplication %f seconds\n",cpu_time_used);

}

