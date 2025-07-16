#include <stdio.h>
#define V 4  

int main()
 {
    int graph[V][V],i,j;
printf("Enter the elements\n");
for (int i = 0; i < V; i++)
 {
    for (int j = 0; j < V; j++)
    {
	scanf("%d\n",&graph[i][j]);      
    }
 }
printf(" the elements are\n");
for (int i = 0; i < V; i++)
 {
    for (int j = 0; j < V; j++)
    {
        printf("%d\t",graph[i][j]);      
    }
    printf("\n");
 }



int  k;
int reach[V][V];
for (i = 0; i < V; i++)
 {
    for (j = 0; j < V; j++)
    {
        reach[i][j] = graph[i][j];
     }
 }

    
for (k = 0; k < V; k++)
{
  for (i = 0; i < V; i++)
 {
      for (j = 0; j < V; j++)
     {
                reach[i][j] = reach[i][j] || (reach[i][k] && reach[k][j]);
     }
  }
}

 printf("Transitive closure of the given graph:\n");
  for (i = 0; i < V; i++)
   {
       for (j = 0; j < V; j++)
       {
            printf("%d ", reach[i][j]);
        }
        printf("\n");
    }

    return 0;
}
