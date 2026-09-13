#include <algorithm>

using namespace std;

typedef long long ll;

static ll S;

// pool=1에서 b=2로 pool=X까지 도달하는 (최소 비용 - 최소 깊이)
ll g(ll X) {
    ll cost = 0, depth = 0;
    while (X > 1) { X = (X + 1) / 2; cost += X; depth++; }
    return cost - depth;
}

// 정확히 T단계(b=2) 안에서 예산 n2로 도달 가능한 최대 pool (g의 단조증가성을 이용한 이분탐색)
ll maxPool(ll T, ll n2) {
    ll target = n2 - T, bound = 1;
    while (g(bound) <= target) bound *= 2;
    ll X = 0;
    for (ll step = bound; step >= 1; step /= 2)
        if (g(X + step) <= target) X += step;
    return X;
}

// prefix * b^T <= S 를 만족하는 최대 T
ll maxLayers(ll prefix, ll b) {
    ll T = 0;
    while (prefix * b <= S) { prefix *= b; T++; }
    return T;
}

// 깊이 T2, 2-연산 n2번 사용 후 남은 예산을 b=3 완전확장으로 최대 흡수했을 때 리프 수
ll leaves(ll T2, ll n2, ll D) {
    ll Q2 = T2 ? maxPool(T2, n2) : 1;
    ll prod2 = 1LL << T2;
    ll T3 = maxLayers(prod2, 3), p3 = 1;
    while (T3--) p3 *= 3;
    ll n3 = min(D - n2, Q2 * (p3 - 1) / 2);
    return 1 + n2 + 2 * n3;
}

int solution(int dist_limit, int split_limit) {
    S = split_limit;
    ll D = dist_limit, answer = 1;

    for (ll T2 = 0; T2 <= 32 && T2 <= D && (1LL << T2) <= S; T2++) {
        ll lo = T2, hi = min(D, (1LL << T2) - 1);
        while (hi - lo > 2) {
            ll m1 = lo + (hi - lo) / 3, m2 = hi - (hi - lo) / 3;
            if (leaves(T2, m1, D) < leaves(T2, m2, D)) lo = m1 + 1;
            else hi = m2 - 1;
        }
        for (ll n2 = lo; n2 <= hi; n2++)
            answer = max(answer, leaves(T2, n2, D));
    }
    return (int)answer;
}
