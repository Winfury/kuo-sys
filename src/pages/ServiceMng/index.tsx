import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, List, Typography, Avatar, Tag } from 'antd';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBath,
  faShower,
  faBell,
  faStethoscope,
  faCut,
  faGift,
  faBug,
  faPaw,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { StateType } from './model';
import { ServiceItemType } from './data.d';
import FormFormInModal from './FormFormInModal';
import styles from './style.less';

const { Paragraph } = Typography;

const icons = {
  faBath,
  faShower,
  faBell,
  faStethoscope,
  faCut,
  faGift,
  faBug,
  faPaw,
  faLeaf,
};

interface ServiceMngProps {
  serviceMng: StateType;
  dispatch: Dispatch<any>;
  loading: boolean;
}
interface ServiceMngState {
  visible: boolean;
  done: boolean;
  current?: Partial<ServiceItemType>;
}

class ServiceMng extends Component<ServiceMngProps, ServiceMngState> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'serviceMng/fetch',
      payload: {
        count: 8,
      },
    });
  }

  render() {
    const {
      serviceMng: { list },
      loading,
    } = this.props;

    const content = (
      <div className={styles.pageHeaderContent}>
        <p>
          每一次修改，删除已有服务类型，可能造成当前已有订单异常
          <br />
          请谨慎维护服务类型
        </p>
      </div>
    );

    const extraContent = (
      <div className={styles.extraImg}>
        <img
          alt="这是一个标题"
          src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
        />
      </div>
    );
    const nullData: Partial<ServiceItemType> = {};
    console.log(icons);
    return (
      <PageHeaderWrapper content={content} extraContent={extraContent}>
        <div className={styles.cardList}>
          <List<Partial<ServiceItemType>>
            rowKey="id"
            loading={loading}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 4,
              xxl: 4,
            }}
            dataSource={[...list, nullData]}
            renderItem={item => {
              if (item && item.id) {
                return (
                  <List.Item key={item.id}>
                    <Card
                      hoverable
                      className={styles.card}
                      actions={[
                        <a key="option1">编辑</a>,
                        <a key="option2">删除</a>,
                      ]}
                    >
                      <Card.Meta
                        avatar={
                          item.icon && (
                            <Avatar>
                              <FontAwesomeIcon icon={icons[item.icon]} />
                            </Avatar>
                          )
                        }
                        title={
                          <>
                            {item.status === 'ON' && (
                              <Tag color="blue">已上架</Tag>
                            )}
                            {item.status === 'OFF' && <Tag>已下架</Tag>}
                            <a>{item.name}</a>
                          </>
                        }
                        description={
                          <Paragraph
                            className={styles.item}
                            ellipsis={{ rows: 3 }}
                          >
                            {item.price} 元 / {item.duration} 分钟
                            <br /> {item.description}
                          </Paragraph>
                        }
                      />
                    </Card>
                  </List.Item>
                );
              }
              return (
                <List.Item>
                  <FormFormInModal />
                </List.Item>
              );
            }}
          />
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default connect(
  ({
    serviceMng,
    loading,
  }: {
    serviceMng: StateType;
    loading: {
      models: { [key: string]: boolean };
    };
  }) => ({
    serviceMng,
    loading: loading.models.serviceMng,
  }),
)(ServiceMng);
