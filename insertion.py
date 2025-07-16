import matplotlib.pyplot as plt
sizes=[100,200,300,400,500]
times=[0.000028,0.000062,0.000118,0.000288,0.000370]
plt.plot(sizes,times,marker='o')
plt.title('Insertion sort')
plt.xlabel("Size")
plt.ylabel('Time Taken(seconds)')
plt.grid(True)
plt.show()
