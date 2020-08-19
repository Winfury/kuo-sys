// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { ServiceItemType } from './data.d';

function fakeList(): ServiceItemType[] {
  const list = [
    {
      id: '1234232',
      name: '洗澡',
      description: '给你超级可爱的宠物洗澡澡XXXXXXXXXXXXXXXXXXXXXX',
      price: 120,
      icon: 'faBath',
      status: 'ON',
      duration: 90,
    } as ServiceItemType,
    {
      id: '22222',
      name: '美容',
      description: '给你超级可爱的宠物美容XXXXXXXXXXXXXXXXXXXXXX',
      price: 90,
      icon: 'faPaw',
      status: 'OFF',
      duration: 120,
    } as ServiceItemType,
  ];
  return list;
}

function getFakeList(req: Request, res: Response) {
  const params = req.query;

  const result = fakeList();
  return res.json(result);
}

export default {
  'GET  /api/fake_service_list': getFakeList,
};
