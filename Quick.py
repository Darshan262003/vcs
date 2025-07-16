import matplotlib.pyplot as plt
sizes=[100,200,300,400,500]
times=[0.000025,0.000062,0.000078,0.000116,0.000126]
plt.plot(sizes,times,marker='o')
plt.title('Quick sort')
plt.xlabel("Size")
plt.ylabel('Time Taken(seconds)')
plt.grid(True)
plt.show()
