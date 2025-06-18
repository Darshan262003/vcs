 
#include<stdio.h>
	
void  main()
{
	int a,b,t,r1,r2;
	printf("enter the first number\n");
	scanf("%d",&a);
	 printf("enter the second number\n");
        scanf("%d",&b);
	if(a>b)
	gcd(b,a,b);
	else
	gcd(a,a,b);

}
	void gcd(int t,int a,int b)
	{
		int r1,r2;
		r1=a%t;
		if(r1==0)
		{
			r2=b%t;
			if(r2==0)
			{	
				printf("gcd of two number  is %d \n",t);
				return;
			}
		}
		else
		{
			gcd(t-1,a,b);
		}
	}	
	

