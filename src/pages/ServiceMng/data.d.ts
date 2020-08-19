export interface ServiceItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: any;
  duration: 30 | 60 | 90 | 120;
  status: 'ON' | 'OFF';
}
