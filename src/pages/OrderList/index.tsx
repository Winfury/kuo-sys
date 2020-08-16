import React, { FC, useEffect } from 'react';
import { Card, List } from 'antd';

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import moment from 'moment';
import { StateType } from './model';
import { BasicListItemDataType } from './data.d';
import styles from './style.less';

interface OrderListProps {
  orderList: StateType;
  dispatch: Dispatch<any>;
  loading: boolean;
}

const ListContent = ({
  data: { name, phone, age },
}: {
  data: BasicListItemDataType;
}) => (
  <div className={styles.listContent}>
    <div className={styles.listContentItem}>
      <span>姓名</span>
      <p>{name}</p>
    </div>
    <div className={styles.listContentItem}>
      <span>手机号</span>
      <p>{phone}</p>
    </div>
    <div className={styles.listContentItem}>
      <span>年龄</span>
      <p>{age}</p>
    </div>
  </div>
);

export const OrderList: FC<OrderListProps> = props => {
  const {
    loading,
    dispatch,
    orderList: { list },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'orderList/fetch',
    });
  }, [1]);
  return (
    <div>
      <PageHeaderWrapper>
        <div className={styles.standardList}>
          <Card
            bordered={false}
            title="基本列表"
            style={{ marginTop: 24 }}
            bodyStyle={{ padding: '0 32px 40px 32px' }}
          >
            <List
              size="large"
              rowKey="id"
              loading={loading}
              dataSource={list}
              renderItem={item => (
                <List.Item>
                  <ListContent data={item} />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </PageHeaderWrapper>
    </div>
  );
};

export default connect(
  ({
    orderList,
    loading,
  }: {
    orderList: StateType;
    loading: {
      models: { [key: string]: boolean };
    };
  }) => ({
    orderList,
    loading: loading.models.orderList,
  }),
)(OrderList);
