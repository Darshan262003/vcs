#include<stdio.h>
#include<time.h>

int gcd(int a,int b)
{
	while(b!=0)
	{
		int temp=b;
		b = a % b;
		a=temp;
	}
	return a;
}

void main()
{
	int a,b;
	printf("Enter the value \n");
	scanf("%d%d",&a,&b);
	int res = gcd(a,b);
	printf("The gcd of two numbers is %d \n",res);
}
