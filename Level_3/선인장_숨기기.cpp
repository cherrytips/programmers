#include <string>
#include <vector>
#include <deque>

using namespace std;

vector<int> solution(int m, int n, int h, int w, vector<vector<int>> drops) {
    vector<int> answer;

    int INF = m * n + 1;
    vector<int> time(m * n, INF);
    for (int i = 0; i < (int)drops.size(); i++) {
        int r = drops[i][0];
        int c = drops[i][1];
        time[r * n + c] = i + 1;
    }

    // 행 방향으로 너비 w 슬라이딩 윈도우 최솟값 계산
    int colWindows = n - w + 1;
    vector<int> rowMin(m * colWindows);
    for (int r = 0; r < m; r++) {
        deque<int> dq;
        for (int c = 0; c < n; c++) {
            while (!dq.empty() && time[r * n + dq.back()] >= time[r * n + c]) {
                dq.pop_back();
            }
            dq.push_back(c);
            if (dq.front() <= c - w) {
                dq.pop_front();
            }
            if (c >= w - 1) {
                rowMin[r * colWindows + (c - w + 1)] = time[r * n + dq.front()];
            }
        }
    }

    // 열 방향으로 높이 h 슬라이딩 윈도우 최솟값 계산 (2D 윈도우 최솟값 완성)
    int rowWindows = m - h + 1;
    vector<int> windowMin(rowWindows * colWindows);
    for (int c = 0; c < colWindows; c++) {
        deque<int> dq;
        for (int r = 0; r < m; r++) {
            int val = rowMin[r * colWindows + c];
            while (!dq.empty() && rowMin[dq.back() * colWindows + c] >= val) {
                dq.pop_back();
            }
            dq.push_back(r);
            if (dq.front() <= r - h) {
                dq.pop_front();
            }
            if (r >= h - 1) {
                windowMin[(r - h + 1) * colWindows + c] = rowMin[dq.front() * colWindows + c];
            }
        }
    }

    int bestR = 0, bestC = 0;
    int bestVal = -1;
    for (int r = 0; r < rowWindows; r++) {
        for (int c = 0; c < colWindows; c++) {
            int val = windowMin[r * colWindows + c];
            if (val > bestVal) {
                bestVal = val;
                bestR = r;
                bestC = c;
            }
        }
    }

    answer.push_back(bestR);
    answer.push_back(bestC);
    return answer;
}
