//Car Fleet: given an int 'target' & 2 arrays: position & speed where position[i] = starting position of car i & speed[i] = speed of car i; whenever 2 cars meet (before or exactly at target), they start moving together (with speed of both = min(speed1, speed2)). Find the no. of car fleets that will arrive at target. (a car fleet = a jhund of cars that arrive together at target). 

int carFleet(int target, vector<int>& position, vector<int>& speed) {
        int n = position.size();
        vector<pair<int, float>> pr;
        for(int i=0; i<n; i++){
            float t = float(target-position[i])/speed[i]; //time req. to reach target
            pr.push_back({position[i], t});
        }
        sort(pr.begin(), pr.end()); //sorts pr in ascending order of positions
        stack<float> st;
        for(int i=n-1; i>=0; i--){
            if(st.empty() || st.top() < pr[i].second){
                st.push(pr[i].second);
            }
        }
        return st.size();
    }