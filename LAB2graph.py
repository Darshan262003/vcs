import matplotlib.pyplot as plt
sizes=[100,300,500,700,900]
times=[0.000005,0.000004,0.000006,0.000006,0.000006]
plt.plot(sizes,times,marker='o')
plt.title('Largest Element')
plt.xlabel("sizes")
plt.ylabel('Time Taken(seconds)')
plt.grid(True)
plt.show()
