//Design Map-Like Data Structure: design a data structure which can hold key: values pair (1 key can hold multiple values) & each value is a pair<string, int> : {val, timestamp}. Write 2 methods: (1)set(key, val, timestamp): to store the val & timestamp corresponding to the key; & (2) get(key, timestamp): which returns corresponding val, if key is not their, return ""; if timestamp is not their, then return val corresponding to the largest imestamp corresponding to this key <= input timestamp. Note: be assured that all the timestamps corresponding to a key will be in increasing order.

class TimeMap {
public:
    map<string, vector<pair<string, int>>> store;
    TimeMap() {
        
    }
    
    void set(string key, string value, int timestamp) {
        store[key].push_back({value, timestamp});
    }
    
    string get(string key, int timestamp) {
        if(store.find(key) == store.end()) return "";
        string ans = "";
        const auto& values = store[key];  
        int l=0, r = values.size()-1;
        while(l<=r){
            int m = l + (r-l)/2;
            if(values[m].second <= timestamp){
                ans = values[m].first;
                l = m+1;
            }
            else r = m-1;
        }
        return ans;
    }
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap* obj = new TimeMap();
 * obj->set(key,value,timestamp);
 * string param_2 = obj->get(key,timestamp);
 */