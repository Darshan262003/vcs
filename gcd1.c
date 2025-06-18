#include<stdio.h>
#include<time.h>
void main()
{
        int a,b,r;
	clock_t end,start;
	double cup_time_used;
        printf("\n enter the first number\n");
        scanf("%d",&a);
        printf(" enter second number\n");
        scanf("%d",&b);
        start=clock();
        while(r!=0)
        {
                r=a%b;
                a=b;
                b=r;
        }
        end=clock();
        printf("\n gcd of two number is %d\n",a);
	cup_time_used=((double)(end-start))/CLOCKS_PER_SEC;
	printf("clock time is %f\n",cup_time_used);
}
