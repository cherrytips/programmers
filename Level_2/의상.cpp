#include <string>
#include <vector>
#include <map>
#include <iostream>

using namespace std;

int solution(vector<vector<string>> clothes) {
    int answer = 1;
    map<string, int> wear;
    
    for (int i = 0; i < clothes.size(); i++) {
        wear[clothes[i][1]] += 1;
    }
    
    for (auto it = wear.begin(); it != wear.end(); it++) {
        answer *= (it->second + 1);
    }
    
    answer -= 1;
    return answer;
}