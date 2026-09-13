#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string solution(vector<int> numbers) {
    string answer = "";

    vector<string> nums;
    for (int i = 0; i < numbers.size(); i++) {
        nums.push_back(to_string(numbers[i]));
    }

    sort(nums.begin(), nums.end(), [](const string& a, const string& b) {
        return a + b > b + a;
    });

    for (int i = 0; i < nums.size(); i++) {
        answer += nums[i];
    }

    if (answer[0] == '0') {
        answer = "0";
    }

    return answer;
}
