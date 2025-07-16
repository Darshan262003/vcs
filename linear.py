import matplotlib.pyplot as plt
sizes=[100,300,500,700,900]
times=[0.000003,0.000002,0.000005,0.000005,0.000007]
plt.plot(sizes,times,marker='o')
plt.title('Linear search')
plt.xlabel("Size")
plt.ylabel('Time Taken(seconds)')
plt.grid(True)
plt.show()
