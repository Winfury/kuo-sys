import request from 'umi-request';

export async function queryFakeList(params: { count: number }) {
  return request('/api/fake_service_list', {
    params,
  });
}
