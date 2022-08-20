import http from 'k6/http';
import { check, sleep } from 'k6';
export const options = {
  vus: 5,
  duration: '15s',
};

export default function () {
  const res = http.get('http://test.k6.io');
  check(res, {
    'is status 200': (r) => r.status === 200,
	'duration was <=' : (r) => r.timings.duration <= 125
  });
  sleep(1);
}