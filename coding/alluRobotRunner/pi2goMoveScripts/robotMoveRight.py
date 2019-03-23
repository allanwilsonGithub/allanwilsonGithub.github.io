import pi2go, time
import sys
import tty
import termios

speed = 60
pi2go.init()

pi2go.spinRight(speed)
time.sleep(0.6)
pi2go.stop()
pi2go.cleanup()
