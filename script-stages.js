import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  stages: [
    { duration: '10s', target: 20 },
    { duration: '15s', target: 10 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}