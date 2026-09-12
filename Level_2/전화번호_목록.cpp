#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

bool solution(vector<string> phone_book) {
    bool answer = true;
    bool find_flag = false;
    sort(phone_book.begin(), phone_book.end());
    for (int i = 0; i+1 < phone_book.size(); i++) {
        // cout << phone_book[i] << " ";
        if (phone_book[i+1].find(phone_book[i]) == 0) {
            answer = false;
            break;
        }
    }
    return answer;
}