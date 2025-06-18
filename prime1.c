#include<stdio.h>
#include<time.h>
void main()
{
	int a,flag=0,i;
	 clock_t end,start;
        double cup_time_used;
	printf("enter the number \n");
        scanf("%d",&a);
	start=clock();
	if(a==1)
	printf("1 is neither composite nor prime\n");
	else if(a==2)
	printf("2 is prime number");
	else
	{
		for(i=2;i<=a/2;i++)
		{
			if(a%i==0)
			flag++;
		}
		if(flag==0)
		printf("%d is prime \n",a);
		else
		printf("%d is not a prime\n",a);
	}
	 end=clock();
	 cup_time_used=((double)(end-start))/CLOCKS_PER_SEC;
         printf("clock time is %f\n",cup_time_used);
}
		
			
