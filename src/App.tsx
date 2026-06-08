import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home/Home'
import ButtonDemo from '@/pages/Components/ButtonDemo'
import InputDemo from '@/pages/Components/InputDemo'
import SelectDemo from '@/pages/Components/SelectDemo'
import FormDemo from '@/pages/Components/FormDemo'
import TableDemo from '@/pages/Components/TableDemo'
import ModalDemo from '@/pages/Components/ModalDemo'
import CardDemo from '@/pages/Components/CardDemo'
import DatePickerDemo from '@/pages/Components/DatePickerDemo'
import { useAppStore } from '@/stores'
import './App.scss'

/**
 * 主应用组件
 */
function App() {
  const { theme: appTheme } = useAppStore()

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: appTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 6,
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="components/button" element={<ButtonDemo />} />
            <Route path="components/input" element={<InputDemo />} />
            <Route path="components/select" element={<SelectDemo />} />
            <Route path="components/form" element={<FormDemo />} />
            <Route path="components/table" element={<TableDemo />} />
            <Route path="components/modal" element={<ModalDemo />} />
            <Route path="components/card" element={<CardDemo />} />
            <Route path="components/datepicker" element={<DatePickerDemo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
