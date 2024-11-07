### An async function that handles the three dependent promises. It will simulate shopping for, soaking, and then cooking the beans. 

   These functions each return a promise: shopForBeans(), soakTheBeans(), and cookTheBeans().


1. shopForBeans() expects no arguments and returns a promise which will resolve to a string of a bean type.
2. soakTheBeans() expects a bean type string as an argument and returns a promise which resolves to a boolean indicating whether or not the beans are softened.
3. cookTheBeans() expects a boolean as an argument and, if that value is true, returns a promise which will resolve to a string announcing that dinner is ready.
