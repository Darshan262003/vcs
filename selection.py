import matplotlib.pyplot as plt
sizes=[100,200,300,400,500]
times=[0.000081,0.000150,0.000277,0.000389,0.000563]
plt.plot(sizes,times,marker='o')
plt.title('Selection sort')
plt.xlabel("Size")
plt.ylabel('Time Taken(seconds)')
plt.grid(True)
plt.show()
