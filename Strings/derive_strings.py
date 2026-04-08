'''

Check if a given string can be derived from another string by circularly rotating it. The rotation can be in a clockwise or anti-clockwise rotation.

Input: X = 'ABCD', Y = 'DABC'
Output: True
Explanation: 'DABC' can be derived from 'ABCD' by right-rotating it by 1 unit

'''

class Solution:
	def check(self, X: str, Y: str) -> bool:
		
		if len(X) != len(Y):
			return False
		
		ids = []
		i = 0

		while (i <= (len(Y)-1)):

			if X[0] == Y[i]:
				ids.append(i)
			i+=1
			
		if not len(ids):
			return False
			
		for i in ids:
			Z = [*Y[i:],*Y[0:i]]
			if X == "".join(Z):
				return True
		
		return False
	