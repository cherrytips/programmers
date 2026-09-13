#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer;
    
    for (int i = 0; i < commands.size(); i++) {
        vector<int> com = commands[i];
        vector<int> sub;
        int start = com[0] - 1;
        int end = com[1] - 1;
        // cout << start << " " << end << "\n";
        for (int idx = start; idx <= end; idx++) {
            sub.push_back(array[idx]);
        }
        sort(sub.begin(), sub.end());
        answer.push_back(sub[com[2]-1]);
    }
    
    return answer;
}