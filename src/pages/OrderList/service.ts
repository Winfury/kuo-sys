import request from 'umi-request';
import { BasicListItemDataType } from './data.d';

interface ParamsType extends Partial<BasicListItemDataType> {
  count?: number;
}

export async function queryFakeList(params: ParamsType) {
  const env = 'ffxq-01-tx4rd';
  const name = 'user';
  let accessToken = '';
  await request(
    '/wechat/cgi-bin/token?grant_type=client_credential&appid=wx20b2edadcbffa75b&secret=eaf7a374af70778b33a8865bfc258e5f',
  ).then(res => {
    accessToken = res.access_token;
  });
  return request(
    `/wechat/tcb/invokecloudfunction?access_token=${accessToken}&env=${env}&name=${name}`,
    {
      method: 'POST',
    },
  );
}

export async function getAccessToken(params: ParamsType) {
  return request(
    '/wechat/cgi-bin/token?grant_type=client_credential&appid=wx20b2edadcbffa75b&secret=eaf7a374af70778b33a8865bfc258e5f',
    {
      params,
    },
  );
}
