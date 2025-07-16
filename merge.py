import matplotlib.pyplot as plt
sizes=[100,200,300,400,500]
times=[0.000027,0.000079,0.000094,0.000102,0.000146]
plt.plot(sizes,times,marker='o')
plt.title('Merge sort')
plt.xlabel("Size")
plt.ylabel('Time Taken(seconds)')
plt.grid(True)
plt.show()

