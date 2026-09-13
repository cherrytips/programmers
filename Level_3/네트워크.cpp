#include <string>
#include <vector>

using namespace std;

void dfs(int cur, vector<vector<int>>& computers, vector<bool>& visited, int n) {
    visited[cur] = true; // Set true cuurent visit
    for (int next = 0; next < n; next++) {
        if (computers[cur][next] == 1 && !visited[next]) {
            dfs(next, computers, visited, n); // Recursive
        }
    }
}

int solution(int n, vector<vector<int>> computers) {
    int answer = 0;
    vector<bool> visited(n, false);
    
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i, computers, visited, n);
            answer++; // Add connection to network
        }
    }
    
    return answer;
}