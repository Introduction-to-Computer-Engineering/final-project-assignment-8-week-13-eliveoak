basic.forever(function () {
    pins.i2cReadNumber(0x1E, NumberFormat.UInt8LE, true)
    pins.i2cReadNumber(0x1E, NumberFormat.UInt8LE, false)
    basic.showNumber(read)
    }
//This function reads the I2C signal

basic.forever(function () {
    pins.i2cWriteNumber(33, 19, NumberFormat.Int32BE, true);
    pins.i2cWriteNumber(33, 87, NumberFormat.Int32BE, false);

})

//This function writes to the I2C



basic.forever(function () {
    pins.i2cWriteNumber(0x1E, 19, NumberFormat.Int32BE, true);
    pins.i2cWriteNumber(0x1E, 87, NumberFormat.Int32BE, false);
	
  
//This function writes to a specific address on the I2C
