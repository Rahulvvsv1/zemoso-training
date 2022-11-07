'''
a1,a2,a3,a4,a5 ............an
Algorithm:
1.Alice chooses first 	
2.So if the sum of alice is even then its bob turn
3.As the sum is even bob needs to remove all even numbers so that alice remains with odd numbers
4.Bob chooses an even number
5.Alice scans the array again if there is an even number then alice picks it up
else alice picks up an odd number
6.if sum of alice is odd then bob picks up an odd number 
7.Then this process keeps on going till there are no elements left
8.If alice sum is even then alice wins or bob wins

'''

inputs = [1,2,10,3,15]
Alice_score = 0
while(len(inputs)!=0):
    for i in inputs:
        if (i%2 == 0 and Alice_score%2 == 0):
            Alice_score += i
            inputs.remove(i)
            print("Alice turn ",i)

            break
        elif(i%2 != 0 and Alice_score%2 != 0):
            Alice_score += i
            inputs.remove(i)
            print("Alice turn ",i)

            break
        else:
            Alice_score += i
            inputs.remove(i)
            print("Alice turn ",i)

            break
        
    for i in inputs:
        if(Alice_score%2 == 0):
            if(i%2==0):
                inputs.remove(i)
                print("Bob turn ",i)

                break
        else:
            if(i%2 != 0 ):
                inputs.remove(i)
                print("Bob turn ",i)

                break
              
    print("Something going on",inputs,Alice_score)  
    
if(Alice_score%2  == 0):
    print("Alice wins")
else:
    print("Bob wins")
            