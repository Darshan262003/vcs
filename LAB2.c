#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main()
{
	int n,i,j,k;
	int a[100][100],b[100][100],c[100][100];
	clock_t start,end;
	double cpu_time_used;
	printf("Enter the size of n for nxn matrix");
	scanf("%d",&n);
	if(n>100)
	{
		printf("Maximum allowed size is 100\n");
		return 1;
	}
	//seed random number generator
	srand(time(NULL));
	//Genertate random matrices a and b
	for(i=0;i<n;i++)
	 for(j=0;j<n;j++)
	 {
		a[i][j]=rand()%10;
		b[i][j]=rand()%10;
		c[i][j]=0;
	}
	//start timing
	start=clock();
	//multiply
	for(i=0;i<n;i++)
	{
		 for(j=0;j<n;j++)
		 {
	 		 for(k=0;k<n;k++)
         		 {
	   			c[i][j]+=a[i][k]*b[k][j];
	  		}
		}
	}
	end=clock();
	cpu_time_used=((double)(end-start))/CLOCKS_PER_SEC;
	//print input matrices
	printf("\n Matrix A:\n");
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
			printf("%d\t",a[i][j]);
		printf("\n");
	}
	printf("\n Matrix B:\n");
        for(i=0;i<n;i++)
        {
                for(j=0;j<n;j++)
                        printf("%d\t",b[i][j]);
                
                printf("\n");
        }
	printf("\n result matrix is \n");
        for(i=0;i<n;i++)
        {
                for(j=0;j<n;j++)
                
                        printf("%d\t",c[i][j]);
                
                printf("\n");
        }
	printf("\nTime taken for multiplication %f seconds\n",cpu_time_used);
	return 0;
}


