#include <string>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

vector<int> solution(vector<string> genres, vector<int> plays) {
    vector<int> answer;

    map<string, long long> totalPlays; // genre -> total plays
    map<string, vector<pair<int, int>>> genreSongs; // genre -> (plays, index)

    for (int i = 0; i < (int)genres.size(); i++) {
        totalPlays[genres[i]] += plays[i];
        genreSongs[genres[i]].push_back({plays[i], i});
    }

    vector<pair<long long, string>> genreOrder; // (total plays, genre)
    for (auto it = totalPlays.begin(); it != totalPlays.end(); it++) {
        genreOrder.push_back({it->second, it->first});
    }

    sort(genreOrder.begin(), genreOrder.end(), greater<pair<long long, string>>()); // Sort genres by total plays in descending order

    for (int g = 0; g < (int)genreOrder.size(); g++) { // Iterate through genres in order of total plays
        string genre = genreOrder[g].second;
        vector<pair<int, int>> songs = genreSongs[genre];

        sort(songs.begin(), songs.end(), [](const pair<int, int>& a, const pair<int, int>& b) { // Sort songs by plays in descending order, and by index in ascending order if plays are equal
            if (a.first != b.first) return a.first > b.first;
            return a.second < b.second;
        });

        int limit = min((int)songs.size(), 2); // Limit to top 2 songs per genre
        for (int i = 0; i < limit; i++) {
            answer.push_back(songs[i].second);
        }
    }

    return answer;
}
