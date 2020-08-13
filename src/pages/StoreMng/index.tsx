import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, List, Typography } from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { StateType } from './model';
import { CardListItemDataType } from './data.d';
import styles from './style.less';
import FormFormInModal from './FormFormInModal';
const { Paragraph } = Typography;
interface StoreMngProps {
  storeMng: StateType;
  dispatch: Dispatch<any>;
  loading: boolean;
}
interface StoreMngState {
  visible: boolean;
  done: boolean;
  current?: Partial<CardListItemDataType>;
}

class StoreMng extends Component<StoreMngProps, StoreMngState> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'storeMng/fetch',
      payload: {
        count: 8,
      },
    });
  }

  render() {
    const {
      storeMng: { list },
      loading,
    } = this.props;
    const content = (
      <div className={styles.pageHeaderContent}>
        <p>
          段落示意：蚂蚁金服务设计平台
          ant.design，用最小的工作量，无缝接入蚂蚁金服生态，
          提供跨越设计与开发的体验解决方案。
        </p>
        <div className={styles.contentLink}>
          <a>
            <img
              alt=""
              src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
            />{' '}
            快速开始
          </a>
          <a>
            <img
              alt=""
              src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
            />{' '}
            产品简介
          </a>
          <a>
            <img
              alt=""
              src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
            />{' '}
            产品文档
          </a>
        </div>
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
    const nullData: Partial<CardListItemDataType> = {};
    return (
      <PageHeaderWrapper content={content} extraContent={extraContent}>
        <div className={styles.cardList}>
          <List<Partial<CardListItemDataType>>
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
            dataSource={[nullData, ...list]}
            renderItem={item => {
              if (item && item.id) {
                return (
                  <List.Item key={item.id}>
                    <Card
                      hoverable
                      className={styles.card}
                      actions={[
                        <a key="option1">操作一</a>,
                        <a key="option2">操作二</a>,
                      ]}
                    >
                      <Card.Meta
                        avatar={
                          <img
                            alt=""
                            className={styles.cardAvatar}
                            src={item.avatar}
                          />
                        }
                        title={<a>{item.title}</a>}
                        description={
                          <Paragraph
                            className={styles.item}
                            ellipsis={{
                              rows: 3,
                            }}
                          >
                            {item.description}
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
    storeMng,
    loading,
  }: {
    storeMng: StateType;
    loading: {
      models: {
        [key: string]: boolean;
      };
    };
  }) => ({
    storeMng,
    loading: loading.models.storeMng,
  }),
)(StoreMng);
