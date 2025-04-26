/**
 * 1606. Find Servers That Handled Most Number of Requests
 * https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/
 * Difficulty: Hard
 *
 * You have k servers numbered from 0 to k-1 that are being used to handle multiple requests
 * simultaneously. Each server has infinite computational capacity but cannot handle more than
 * one request at a time. The requests are assigned to servers according to a specific algorithm:
 * - The ith (0-indexed) request arrives.
 * - If all servers are busy, the request is dropped (not handled at all).
 * - If the (i % k)th server is available, assign the request to that server.
 * - Otherwise, assign the request to the next available server (wrapping around the list of servers
 *   and starting from 0 if necessary). For example, if the ith server is busy, try to assign the
 *   request to the (i+1)th server, then the (i+2)th server, and so on.
 *
 * You are given a strictly increasing array arrival of positive integers, where arrival[i]
 * represents the arrival time of the ith request, and another array load, where load[i] represents
 * the load of the ith request (the time it takes to complete). Your goal is to find the busiest
 * server(s). A server is considered busiest if it handled the most number of requests successfully
 * among all the servers.
 *
 * Return a list containing the IDs (0-indexed) of the busiest server(s). You may return the IDs
 * in any order.
 */

/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function(k, arrival, load) {
  const requests = new Array(k).fill(0);
  const busy = new PriorityQueue((a, b) => a[0] - b[0]);
  const right = Array.from({length: k}, (_, i) => i);
  let left = [];

  for (let i = 0; i < arrival.length; i++) {
    const time = arrival[i];
    const target = i % k;

    while (!busy.isEmpty() && busy.front()[0] <= time) {
      const serverId = busy.dequeue()[1];
      (serverId >= target) ? binaryInsert(right, serverId) : binaryInsert(left, serverId);
    }

    let assigned = -1;

    if (right.length > 0) {
      const index = binarySearch(right, target);
      if (index < right.length) {
        assigned = right[index];
        right.splice(index, 1);
      }
    }

    if (assigned === -1 && left.length > 0) {
      assigned = left[0];
      left.shift();
    }

    if (assigned !== -1) {
      requests[assigned]++;
      busy.enqueue([time + load[i], assigned]);
    }

    if ((i + 1) % k === 0) {
      right.push(...left);
      right.sort((a, b) => a - b);
      left = [];
    }
  }

  const maxRequests = Math.max(...requests);
  return requests.reduce((result, count, index) => {
    if (count === maxRequests) result.push(index);
    return result;
  }, []);
};

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = arr.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

function binaryInsert(arr, val) {
  arr.splice(binarySearch(arr, val), 0, val);
}
