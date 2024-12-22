private:
    bool isAlphanumeric(char c){
        if((c >= 'a' && c<='z') || (c>='A' && c<='Z') || (c>='0' && c<='9')){
            return true;
        }
        return false;
    }
    char caseChange(char c){
            char s = tolower(c);
            return s;
        
    }
    void reverse(string &f, string &rev, int i){
        //BC
        if(i>=f.size()) return;
        //Store current char
        char ch = f[i];
        //RC
        i++;
        reverse(f, rev, i);
        //
        rev.push_back(ch);
    }
public:
    bool isPalindrome(string s) {
        string f = "";
        for(auto i: s){
            if(isAlphanumeric(i)){
                if(isupper(i)){
                    f.push_back(caseChange(i));
                }
                else{
                    f.push_back(i);
                }
            }
        }
        string rev = "";
        reverse(f, rev, 0);
    
        if(f == rev) return true;
        else return false;
    }
};