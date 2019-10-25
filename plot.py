#!/usr/bin/env python3 -u
from matplotlib.pyplot import clf, plot, pause
from sys import stdin, argv

plots = []

for i in range(1, len(argv)):
    plots.append([])

while True:
    clf()
    for i in range(0, len(plots)):
        plot(plots[i])
    pause(.001)
    val = stdin.readline().strip().split(" ")

    for i in range(0, len(val)):
        plots[i].append(float(val[i]))