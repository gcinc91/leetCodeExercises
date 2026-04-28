/**
 * Sliding Window Approach - O(m + n) time complexity
 * 
 * Find the minimum window substring of s that contains all characters in t
 * including duplicates. Uses two pointers to expand and contract the window.
 */
function minWindow(s: string, t: string): string {
    // Validation: if t is longer than s, impossible to contain all chars
    if (t.length > s.length) return "";
    
    // Create map of required characters and their frequencies
    const required = new Map<string, number>();
    for (const char of t) {
        required.set(char, (required.get(char) || 0) + 1);
    }
    
    // Tracks how many unique character types have been satisfied
    let formed = 0;
    
    // Current window character frequencies
    const windowCounts = new Map<string, number>();
    
    // Track minimum window found
    let minLen = Infinity;
    let minLeft = 0;
    
    // Left pointer for sliding window
    let left = 0;
    
    // Right pointer expands the window
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        // Add character to current window
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);
        
        // Check if we just satisfied this character requirement
        if (required.has(char) && windowCounts.get(char) === required.get(char)) {
            formed++;
        }
        
        // Contract window from left when all characters are satisfied
        while (formed === required.size && left <= right) {
            const leftChar = s[left];
            
            // Update result if current window is smaller
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minLeft = left;
            }
            
            // Remove left character from window
            windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
            
            // Check if we lost satisfaction of this character
            if (required.has(leftChar) && windowCounts.get(leftChar) < required.get(leftChar)) {
                formed--;
            }
            
            // Move left pointer to try smaller window
            left++;
        }
    }
    
    // Return minimum window or empty string if not found
    return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen);
}