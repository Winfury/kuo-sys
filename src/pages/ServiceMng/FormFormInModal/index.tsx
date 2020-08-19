import styles from '../style.less';
import { PlusOutlined } from '@ant-design/icons';
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
import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, InputNumber } from 'antd';

interface Values {
  title: string;
  description: string;
  modifier: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="创建服务"
      okText="创建"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="name"
          label="服务名称"
          rules={[
            {
              required: true,
              message: '必填',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="服务类容描述"
          rules={[
            {
              required: true,
              message: '必填',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="duration"
          label="服务时长"
          rules={[
            {
              required: true,
              message: '必填',
            },
          ]}
        >
          <Radio.Group defaultValue={30} size="large">
            <Radio.Button value={30}>30</Radio.Button>
            <Radio.Button value={60}>60</Radio.Button>
            <Radio.Button value={90}>90</Radio.Button>
            <Radio.Button value={120}>120</Radio.Button>
          </Radio.Group>{' '}
          分钟
        </Form.Item>
        <Form.Item
          name="price"
          label="价格"
          rules={[
            {
              required: true,
              message: '必填',
            },
          ]}
        >
          <InputNumber defaultValue={30} /> 元
        </Form.Item>
        <Form.Item
          name="icon"
          label="图标"
          rules={[
            {
              required: true,
              message: '必填',
            },
          ]}
        >
          <Radio.Group defaultValue="a" size="large">
            <Radio.Button value="faBath">
              <FontAwesomeIcon icon={faBath} />
            </Radio.Button>
            <Radio.Button value="faCut">
              <FontAwesomeIcon icon={faCut} />
            </Radio.Button>
            <Radio.Button value="faShower">
              <FontAwesomeIcon icon={faShower} />
            </Radio.Button>
            <Radio.Button value="faBell">
              <FontAwesomeIcon icon={faBell} />
            </Radio.Button>
            <Radio.Button value="faStethoscope">
              <FontAwesomeIcon icon={faStethoscope} />
            </Radio.Button>
            <Radio.Button value="faGift">
              <FontAwesomeIcon icon={faGift} />
            </Radio.Button>
            <Radio.Button value="faBug">
              <FontAwesomeIcon icon={faBug} />
            </Radio.Button>
            <Radio.Button value="faPaw">
              <FontAwesomeIcon icon={faPaw} />
            </Radio.Button>
            <Radio.Button value="faLeaf">
              <FontAwesomeIcon icon={faLeaf} />
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="status"
          label="状态"
          rules={[
            {
              required: true,
              message: '必填',
            },
          ]}
        >
          <Radio.Group defaultValue="ON">
            <Radio.Button value="ON">上架</Radio.Button>
            <Radio.Button value="OFF">下架</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <React.Fragment>
      <Button
        type="dashed"
        className={styles.newButton}
        onClick={() => {
          setVisible(true);
        }}
      >
        <PlusOutlined /> 新增
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </React.Fragment>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-form-demo-form-in-modal">
      <CollectionsPage />
    </div>
  </div>
);
