// Daily Tempeartures: given a 'Temps' array, create an ans array such that for each val in Temps array, ans[i] = index - i where index = smallest index for which Temps[index] > Temps[i], (ie, smallest distance on right for which temp. is larger than curr temp); if no such index -> ans[i] = 0.

vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        vector<int> ans(n, 0); // Initialize answer array with 0
        stack<pair<int, int>> ms; // Monotonically decreasing stack

        for (int i = 0; i < n; i++) {
            // Process elements in the stack that are smaller than current temperature
            while (!ms.empty() && ms.top().first < temperatures[i]) {
                pair<int, int> pr = ms.top(); // Get the top element
                ms.pop(); // Remove it from the stack
                ans[pr.second] = i - pr.second; // Calculate the difference in days
            }
            // Push the current temperature and index
            ms.push({temperatures[i], i});
        }
        return ans; // Return the result
    }