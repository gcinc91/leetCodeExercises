class Solution:
	def rearrange(self, nums: List[int]) -> None:
		negative_point = 0
		positive_point = len(nums)-1
		
		
		while positive_point >= negative_point:
			
			if nums[negative_point] > 0 and nums[positive_point] < 0:
				temp = nums[negative_point]
				nums[negative_point] = nums[positive_point]
				nums[positive_point] = temp
				negative_point += 1
				positive_point -= 1
				
			elif nums[negative_point] > 0 :
				positive_point -= 1

			else:
				negative_point += 1