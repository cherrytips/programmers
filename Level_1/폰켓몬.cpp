#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int solution(vector<int> nums)
{
    int answer = 0;
    // vector<int> pkm(1);
    vector<int> pkm;
    
    sort(nums.begin(), nums.end());
    for(int i = 0; i < nums.size(); i++) {
        // cout << nums[i] << " " << pkm.back() << "\n";
        if (pkm.empty() || pkm.back() != nums[i]) {
            pkm.push_back(nums[i]);
        }
        if (pkm.size() >= nums.size()/2) break;
    }
    
    answer = pkm.size();
    return answer;
}