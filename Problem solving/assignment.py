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
  
input_array = [1,2,10,3,15,10]
alice_score = 0 
bob_score=0
found =0

def find_even():
    global found
    for i in range(len(input_array)):
        if (input_array[i])%2 ==0:
            found = i
            break
        else :
            found = 0
def find_odd():
    global found
    for i in range(len(input_array)):
        if (input_array[i])%2 != 0:
            found = i
            break
        else :
            found = 0

def add_to_alice():
    global alice_score
    alice_score += input_array[found]
    input_array.remove(input_array[found])

def add_to_bob():
    
    #print("IN BOB",found,input_array)
    global bob_score
    bob_score += input_array[found]
    input_array.remove(input_array[found])



while(len(input_array)!=0):
    #alice turn
    #alice always needs to choose elements so that the sum is always even
    # even + even = even 
    # odd  + odd = even
    # alice needs to follow the above numbers and add if specific even or odd is not found the add the first element  
    if(alice_score%2 == 0): 
        find_even()
    else:
        find_odd()

    add_to_alice()  


    #added this line to see if the list is empty or not after first removal
    if(len(input_array)==0):
        break

    #bob turn
    #if alice score is even bob needs to choose even to reduce alice chances to get even numbers
    #if specific type of even or odd is not found according to necessary just add the firs number in the array
    if (alice_score%2 == 0):
        find_even()
    else :
        find_odd()

    add_to_bob()
    print(alice_score,bob_score,input_array)


print("alice score: ",alice_score,"\nbob_score",bob_score,"\n")
if(alice_score%2  == 0):
    print("Alice wins")
else:
    print("Bob wins")