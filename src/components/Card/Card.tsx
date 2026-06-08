import { Card as AntCard } from 'antd'
import type { CardProps } from './types'
import './Card.scss'

const { Meta, Grid } = AntCard

/**
 * Card 组件 - 基于 Ant Design Card 的二次封装
 * 提供统一的卡片样式和行为
 */
const Card = (props: CardProps) => {
  return <AntCard {...props} />
}

Card.Meta = Meta
Card.Grid = Grid

export default Card
