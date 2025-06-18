
#include<stdio.h>
void main()
{
	int i,r1,c1,r2,c2,j,m,n;
	printf("enter the number of rows of first matrix\n");
	scanf("%d",&r1);
	printf("enter the number of columns of second matrix\n");
        scanf("%d",&c1);
	int a[r1][c1];
	printf("enter the elements\n");
	for(i=0;i<r1;i++)
	{
		for(j=0;j<c1;j++)
		{
			scanf("%d",&a[i][j]);
		}
	}
	 printf("enter the number of rows of second matrix\n");
        scanf("%d",&r2);
        printf("enter the number of columns of second matrix\n");
        scanf("%d",&c2);
        int b[r2][c2];
        printf("enter the elements\n");
        for(m=0;m<r2;m++)
        {
                for(n=0;n<c2;n++)
                {
                        scanf("%d",&b[m][n]);
                }
        }
	printf("mof two  matrix is\n");
	for(i=0;i<r1;i++)
	for(j=0;j<c1;j++)
	{
		printf("%d\n",(a[i][j]*b[i][j])+(a[i][j+1]*b[i+1][j]));
	}
}

