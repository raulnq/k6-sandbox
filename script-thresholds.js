import http from 'k6/http';
import { check, sleep } from 'k6';
export const options = {
  vus: 5,
  duration: '15s',
  thresholds: {
    http_req_duration: ['p(95)<100'], // 95% of requests should be below 100ms
  },
};

export default function () {
  const res = http.get('http://test.k6.io');
  check(res, {
    'is status 200': (r) => r.status === 200
  });
  sleep(1);
}