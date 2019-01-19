import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import math

yAxis = []
xAxis = []
for i in range(1, 450):
    alt = (math.sqrt((6371 * 6371) + (i * i))) - 6371
    yAxis.append(i)
    xAxis.append(alt)

# Radar Image
# image = mpimg.imread('weather_radar.png')
# plt.imshow(image)

plt.plot(yAxis, xAxis, linewidth=5.0)
plt.title('Radar Ray starting at 0 altitude')
plt.text(150, 0.25, r'$\mu=100,\ \sigma=15$')
plt.ylabel('altitude')
plt.xlabel('distance from radar (kms)')
plt.show()