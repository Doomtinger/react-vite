import { useState } from 'react'
import { Card, Modal, Button } from '@/components'
import { Space } from 'antd'
import './ButtonDemo.scss'

/**
 * Modal 弹窗组件演示
 */
const ModalDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [isAsyncOpen, setIsAsyncOpen] = useState(false)
  const [isCustomFooterOpen, setIsCustomFooterOpen] = useState(false)
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    console.log('确认操作')
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    console.log('取消操作')
    setIsModalOpen(false)
  }

  const showConfirm = () => {
    setIsConfirmOpen(true)
  }

  const showInfo = () => {
    Modal.info({
      title: '信息',
      content: '这是一条信息提示',
    })
  }

  const showSuccess = () => {
    Modal.success({
      title: '成功',
      content: '操作成功！',
    })
  }

  const showError = () => {
    Modal.error({
      title: '错误',
      content: '操作失败，请重试！',
    })
  }

  const showWarning = () => {
    Modal.warning({
      title: '警告',
      content: '请注意检查您的操作！',
    })
  }

  const handleAsyncOk = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
        setIsAsyncOpen(false)
      }, 2000)
    })
  }

  const handleAsyncCancel = () => {
    console.log('取消')
    setIsAsyncOpen(false)
  }

  return (
    <div className="component-demo">
      <div className="demo-header">
        <h1>Modal 弹窗</h1>
        <p className="demo-description">
          模态对话框组件，基于 Ant Design Modal 二次封装，支持各种交互场景。
        </p>
      </div>

      <Card title="基础弹窗" className="demo-card">
        <Space>
          <Button type="primary" onClick={showModal}>
            打开弹窗
          </Button>
          <Modal
            title="基础弹窗"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>这是一段弹窗内容...</p>
            <p>这是更多弹窗内容...</p>
          </Modal>
        </Space>
      </Card>

      <Card title="确认弹窗" className="demo-card">
        <Space>
          <Button onClick={showConfirm}>确认对话框</Button>
          <Modal
            title="确认操作"
            open={isConfirmOpen}
            onOk={() => {
              console.log('确认')
              setIsConfirmOpen(false)
            }}
            onCancel={() => setIsConfirmOpen(false)}
            okText="确认"
            cancelText="取消"
          >
            <p>您确定要执行此操作吗？</p>
          </Modal>
        </Space>
      </Card>

      <Card title="信息提示" className="demo-card">
        <Space>
          <Button onClick={showInfo}>信息</Button>
          <Button onClick={showSuccess}>成功</Button>
          <Button onClick={showError}>错误</Button>
          <Button onClick={showWarning}>警告</Button>
        </Space>
      </Card>

      <Card title="异步关闭" className="demo-card">
        <Space>
          <Button type="primary" danger onClick={() => setIsAsyncOpen(true)}>
            异步关闭弹窗
          </Button>
          <Modal
            title="异步关闭弹窗"
            open={isAsyncOpen}
            onOk={handleAsyncOk}
            onCancel={handleAsyncCancel}
            confirmLoading={isAsyncOpen}
          >
            <p>点击确定按钮后，2秒后关闭弹窗...</p>
          </Modal>
        </Space>
      </Card>

      <Card title="自定义页脚" className="demo-card">
        <Space>
          <Button type="primary" onClick={() => setIsCustomFooterOpen(true)}>
            自定义页脚弹窗
          </Button>
          <Modal
            title="自定义页脚"
            open={isCustomFooterOpen}
            onOk={() => setIsCustomFooterOpen(false)}
            onCancel={() => setIsCustomFooterOpen(false)}
            footer={
              <div>
                <Button onClick={() => setIsCustomFooterOpen(false)}>返回</Button>
                <Button type="primary" onClick={() => setIsCustomFooterOpen(false)}>
                  提交
                </Button>
                <Button type="link" onClick={() => setIsCustomFooterOpen(false)}>
                  忘记密码
                </Button>
              </div>
            }
          >
            <p>这是自定义页脚的弹窗内容...</p>
          </Modal>
        </Space>
      </Card>

      <Card title="全屏弹窗" className="demo-card">
        <Space>
          <Button type="primary" onClick={() => setIsFullScreenOpen(true)}>
            全屏弹窗
          </Button>
          <Modal
            title="全屏弹窗"
            open={isFullScreenOpen}
            onOk={() => setIsFullScreenOpen(false)}
            onCancel={() => setIsFullScreenOpen(false)}
            centered
            width="90%"
            style={{ top: 20 }}
          >
            <p>这是一个全屏弹窗，适合展示大量内容。</p>
            <p>弹窗内容...</p>
          </Modal>
        </Space>
      </Card>

      <Card title="代码示例" className="demo-card">
        <pre className="code-block">
          <code>{`import { Modal, Button } from '@/components'
import { useState } from 'react'

const MyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    console.log('确认操作')
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    console.log('取消操作')
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        打开弹窗
      </Button>
      <Modal
        title="基础弹窗"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>这是一段弹窗内容...</p>
      </Modal>
    </>
  )
}

// 使用 Modal 的静态方法
Modal.info({
  title: '信息',
  content: '这是一条信息提示',
})

Modal.success({
  title: '成功',
  content: '操作成功！',
})`}</code>
        </pre>
      </Card>
    </div>
  )
}

export default ModalDemo
