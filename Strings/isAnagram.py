'''

Given two strings, determine whether they are anagrams.

Any word that exactly reproduces the letters in another order is an anagram. In other words, X and Y are anagrams if by rearranging the letters of X, we can get Y using all the original letters of X exactly once.

Input: X = 'silent', Y = 'listen'
Output: True

Input: X = 'incest', Y = 'insect'
Output: True

'''

class Solution:
	def isAnagram(self, X: str, Y: str) -> bool:
		# Write your code here...
		if len(X) != len(Y): 
			return False
			
		X_table = {}
		Y_table = {}
		
		for i in range(len(X)):
			print('i ', i)
			if X_table.get(X[i], False):
				X_table[X[i]] += 1
			else:
				X_table[X[i]] = 1
				
			if Y_table.get(Y[i], False):
				Y_table[Y[i]] += 1
			else:
				Y_table[Y[i]] = 1
				
		return X_table == Y_table
