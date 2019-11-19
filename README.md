# Oscilloscope

## Part 2
### Section i

####  This is the video for Part 2, Section i warmup
  
  [Video](https://imgur.com/a/ghAb5cp)

#### This is the video for Part 2 Section i subsection a

  [subsection a](https://imgur.com/a/Rwbyp3r)

#### This is the video for Part 2 Section i subsection b

  [subsection b](https://imgur.com/a/v5tZJmJ)

#### This is the video for Part 2 Section i subsection c

  [subsection c](https://imgur.com/a/mphbWIl)
  
#### This is the video for Part 2 Section i subsection d

  [subsection d](https://imgur.com/a/SfhWVpz)
  We got the readings for the minimum and maximum period and pulse ranges.
  
  Pulse range
  Min: 1.98
  Max: 18.8
 
  Period range
  Min: 11.2
  Max: 20.05

# I2C Warmup

## Part 2
### Questions 
#### Question a:
UART Ports are asynchronous, and therefore require hardware overhead. UARTs are relatively complex and difficult 
to accurately implement in software. At least one start and stop bit is required for each part of a frame of data. For example, 10 bits of transmission time is required for each 8 bits of data sent. Also, they are only essentially setup to work between two, and only two devices. It is possible to connect multiple devices to a single port, but there are factors that must be taken into account to not damage the questions in action, usually through external hardware. 

SPI ports have an obvious drawback, being the number of pins required for connections between devices. Connecting a single master to a single slave with SPI requires 4 lines, and each additional slave requires an additional I/O chip select pin on master. Because of this, the amount of pin connections makes it pretty bad in situations where lots of devices are connected to one master. Also, routing signals can become a pain in these situations, because of the physical space that routing lanes require.

I2C Chips are the best of both versions of hardware though. It combines just two wires, like 
UART but it can support up to 1008 slaves. Also, it can support a multi-master system, which allows more than one master to communicare with all the devices that they're connected to. Unfortunately, the masters can't talk to each other. There's a little bit of overhead with I2C, for every 8 bits of data that are sent, one extra bit of metadata is sent as well. Also, I2C can be trivially implemented in software, and it's less complex than asynchronous serial.


