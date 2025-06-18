#include<time.h>
#include<stdlib.h>
#include<stdio.h>
void main()
{
	int n,key,pos=0,found,i;
        clock_t start,end;
        double cpu_time_used;

	printf("enter the size of array\n");
	scanf("%d",&n);
	int a[n];
	srand(time(NULL));

	for(i=0;i<n;i++)
	{
		a[i]=rand()%10;
	}
	printf("Enter the Element to be searched\n");
	scanf("%d",&key);
	start=clock();
	for(i=0;i<n;i++)
	{
		if(a[i]==key)
		{
		printf("Element is present at position %d",pos+1);
		found=1;
		break;
		}
		pos++;

	}
	 end=clock();
	 if(found==0)
	 printf("element is not present\n");
	 cpu_time_used=((double)(end-start))/CLOCKS_PER_SEC;
         printf("\nTime taken for multiplication %f seconds\n",cpu_time_used);

}
 
