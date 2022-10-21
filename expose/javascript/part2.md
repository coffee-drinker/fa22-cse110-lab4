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