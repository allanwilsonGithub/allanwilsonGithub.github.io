import matplotlib.pyplot as plt
import math

yAxis = []
xAxis = []
ground = []
for i in range(1, 450):
    alt = (math.sqrt((6371 * 6371) + (i * i))) - 6371
    yAxis.append(i)
    xAxis.append(alt)
    ground.append(0)


plt.plot(yAxis, xAxis, linewidth=5.0)
plt.title('Radar Ray starting at 0 altitude')
plt.text(150, 0.25, r'Ground level')
plt.text(300, 10, r'Radar Beam')
plt.plot(yAxis, ground, 'g--')
plt.ylabel('altitude')
plt.xlabel('distance from radar (kms)')
plt.show()