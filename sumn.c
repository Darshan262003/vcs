#include<stdio.h>
#include<time.h>
void main()
{
	int n,i,sum=0;
	clock_t start,end;
	double cpu_time;
	printf("enter the size of array\n");
	scanf("%d",&n);
	int a[n];
	printf("enter the array elements\n");
	for(i=0;i<n;i++)
	scanf("%d",&a[i]);
	start=clock();
	for(i=0;i<n;i++)
	{
		sum+=a[i];
	}
	end=clock();
	cpu_time=((double)(end-start))/CLOCKS_PER_SEC;
	printf("sum of n elements is %d\n",sum);
	printf("clock time is %f\n",cpu_time);

}
