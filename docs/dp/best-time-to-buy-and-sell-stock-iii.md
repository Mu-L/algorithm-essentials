---
title: Best Time to Buy and Sell Stock III
---

### 描述

Say you have an array for which the i-th element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

### 分析

设状态`f(i)`，表示区间$$[0,i](0 \leq i \leq n-1)$$的最大利润，状态`g(i)`，表示区间$$[i, n-1](0 \leq i \leq n-1)$$的最大利润，则最终答案为$$\max\left\{f(i)+g(i)\right\},0 \leq i \leq n-1$$。

允许在一天内买进又卖出，相当于不交易，因为题目的规定是最多两次，而不是一定要两次。

将原数组变成差分数组，本题也可以看做是最大`m`子段和，`m=2`，参考代码：[https://gist.github.com/soulmachine/5906637](https://gist.github.com/soulmachine/5906637)

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Best Time to Buy and Sell Stock III
// 时间复杂度O(n)，空间复杂度O(n)
public class Solution {
    public int maxProfit(int[] prices) {
        if (prices.length < 2) return 0;

        final int n = prices.length;
        int[] f = new int[n];
        int[] g = new int[n];

        for (int i = 1, valley = prices[0]; i < n; ++i) {
            valley = Math.min(valley, prices[i]);
            f[i] = Math.max(f[i - 1], prices[i] - valley);
        }

        for (int i = n - 2, peak = prices[n - 1]; i >= 0; --i) {
            peak = Math.max(peak, prices[i]);
            g[i] = Math.max(g[i], peak - prices[i]);
        }

        int max_profit = 0;
        for (int i = 0; i < n; ++i)
            max_profit = Math.max(max_profit, f[i] + g[i]);

        return max_profit;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Best Time to Buy and Sell Stock III
// 时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if (prices.size() < 2) return 0;

        const int n = prices.size();
        vector<int> f(n, 0);
        vector<int> g(n, 0);

        for (int i = 1, valley = prices[0]; i < n; ++i) {
            valley = min(valley, prices[i]);
            f[i] = max(f[i - 1], prices[i] - valley);
        }

        for (int i = n - 2, peak = prices[n - 1]; i >= 0; --i) {
            peak = max(peak, prices[i]);
            g[i] = max(g[i], peak - prices[i]);
        }

        int max_profit = 0;
        for (int i = 0; i < n; ++i)
            max_profit = max(max_profit, f[i] + g[i]);

        return max_profit;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Best Time to Buy and Sell Stock III
# 时间复杂度O(n)，空间复杂度O(n)
def maxProfit(prices):
    if len(prices) < 2:
        return 0

    n = len(prices)
    f = [0] * n
    g = [0] * n

    valley = prices[0]
    for i in range(1, n):
        valley = min(valley, prices[i])
        f[i] = max(f[i - 1], prices[i] - valley)

    peak = prices[n - 1]
    for i in range(n - 2, -1, -1):
        peak = max(peak, prices[i])
        g[i] = max(g[i], peak - prices[i])

    max_profit = 0
    for i in range(n):
        max_profit = max(max_profit, f[i] + g[i])

    return max_profit
```

</TabItem>
</Tabs>

### 相关题目

- [Best Time to Buy and Sell Stock](../greedy/best-time-to-buy-and-sell-stock.md)
- [Best Time to Buy and Sell Stock II](../greedy/best-time-to-buy-and-sell-stock-ii.md)
