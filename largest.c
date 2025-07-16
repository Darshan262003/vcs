#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main()
{
        int n,i,j,k;
        int arr[10000],size,largest;
        clock_t start,end;
        double cpu_time_used;
        printf("Enter the size of array");
        scanf("%d",&size);
        if(n>10000||size<=0)
        {
                printf("Size must be between 1 and 1000\n");
                return 1;
        }
        //seed random number generator
        srand(time(NULL));
	for(i=0;i<size;i++)
		arr[i]=rand()%100;
	for(i=0;i<size;i++)
		printf("%d\t",arr[i]);
	largest=arr[0];
	start=clock();
	for(i=0;i<size;i++){
	 if(arr[i]>largest)
		largest=arr[i];
	}
	end=clock();
	cpu_time_used=(double)(end-start)/CLOCKS_PER_SEC;
	printf("\nLargest element is %d",largest);
	printf("\nTime taken:%.6f sconds\n",cpu_time_used);

}

