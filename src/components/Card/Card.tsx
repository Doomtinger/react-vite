import { Card as AntCard } from 'antd'
import type { CardProps } from './types'
import './Card.scss'

/**
 * Card 组件 - 基于 Ant Design Card 的二次封装
 * 提供统一的卡片样式和行为
 */
const Card = (props: CardProps) => {
  return <AntCard {...props} />
}

export default Card
