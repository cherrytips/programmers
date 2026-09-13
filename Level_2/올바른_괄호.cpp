#include <string>
#include <vector>
#include <iostream>

using namespace std;

bool solution(string s)
{
    bool answer = false;
    vector<char> cur;
    
    for (int i = 0; i < s.size(); i++) {
        // cout << s[i] << " ";
        if (cur.size() == 0) {
            cur.push_back(s[i]);
        } else if (cur.back() == '(' && s[i] == ')') {
            cur.pop_back();
        } else {
            cur.push_back(s[i]);
        }
    }
    
    if (cur.empty()) answer = true;

    return answer;
}