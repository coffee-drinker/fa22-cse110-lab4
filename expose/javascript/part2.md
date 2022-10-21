1. It will output 3 because i is a var which is reachable from everywhere. The length of prices is 3, so it is out of the for loop when i reaches 3. 

2. 150. Because discountedPrice is accessible from everywhere. We only record the last number of the tutple we insert and find out its discount value. 

3. 150. finalPrice is a var which is accessible from everywhere. Since we are not adding the finalPrace, but we are changing it to the rounded discounted price of the last number in the tutple. 

4. [50, 100, 150]. Because it returns a tutple called discounted. And every element that is pushed to discounted is the discountedPrice, which correctly calculates the discounted price. 

5. Error, because i is not defined outside of the for loop. 

6. Error, because discountedPrice is not defined outside of the for loop. 

7. 150, because finalPrice is defined outside of the for loop, and inside the for loop the finalPrice only keeps track of the last discounted number. 

8. [50, 100, 150]. Because it returns a tutple called discounted. And every element that is pushed to discounted is the discountedPrice, which correctly calculates the discounted price. And discounted is defined outside of the for loop, so it is able to be returned. 

9. error. Because i is only defined inside the for loop. It is inaccessible outside of the for loop. 

10. 3. Because length is defined to be the length of the input prices, stored as a const variable. The input prices have length 3, so length is 3. 

11. [50, 100, 150]. Even though we set a const to disconted. It does not prevent us from pushing elements into discounted. Discounted receives a correct copy of the discountedPrice and store it. So discounted will become [50, 100, 150]. 

12A. student.name
12B. student['Grad Year']
12C. student.greeting()
12D. student ['Favourite Teacher'].name
12E. student.courseLoad[0]

13A. "32" because "3" is a string. It concatenates with an integer 2 which is converted to string. 
13B. 1, because - sign minus 3 to 2, and string "3" is converted to numbers 
13C. 3, it is a number. Null is treated as number 0. 
13D. 3null. "3" is a string, performs a string concatenation on "null"
13E. 4, because true is 1. 
13F. 0, because false is 0. 0+null is still 0. 
13G. "3undefined", string concatenation because of "3"
13H. NaN, not a number. Undefined is not a number, string is not subtracting any nonnumber, so NaN. 

14A. True, '2' is converted to number 
14B. False, ascii of "2" is higher than ascii of "12"
14C. True, easy conparison, not strict 
14D. False, one is number the other string
14E. False, true converts to 1, 1 != 2. 
14F. True. Boolean of 2 returns true because it is not 0. True is strictly equal to true. 

15. "==" is an easy comparison that allows type conversion. "===" is a strict comparison that does not allow type conversion. 

