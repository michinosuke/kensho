/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'

interface Props {
  categoryList: CategoryList
  content: LayoutCategoryList
}

const LayoutCategoryList = (props: Props) => {
  let categories = props.categoryList
  let content = props.content
  let items: JSX.Element[] = []
  Object.keys(categories).forEach((key, i) => {
    items.push(
      <OuterTile key={'OuterTile' + i}>
        <Link to={`/category/${key}`}>
          <Tile
            key={'Tile' + i}
            style={{ backgroundImage: `url(https://prizz.jp/assets/img/categoryList/${key}.jpg)` }} />
        </Link>
        <Name key={'Name' + i}>{categories[key]}</Name>
      </OuterTile>
    )
  })
  return (
    <div>
      <Heading>{content.heading}</Heading>
      <HorizontalSchrollBox>
        {items}
      </HorizontalSchrollBox>
    </div>
  )
}

const Heading = styled.h1`
  display: inline-block;
  font-size: 1.125rem;
  color: #333;
  margin: 20px 20px 0;
`
const HorizontalSchrollBox = styled.ul`
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  /* border-top: 2px solid #DDD;
  border-bottom: 2px solid #DDD; */
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  `
const OuterTile = styled.li`
  display: inline-block;
  position: relative;
  width: 100px;
  ${media.greaterThan('medium')`
    width: 14vw;
  `}
  height: auto;
  margin: 10px;
`
const Tile = styled.div`
  /* 広告用 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* API用 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  text-align: center;
  width: 100%;
  height: 100px;
  /* ${media.greaterThan('medium')`
    height: 14vw;
  `} */
  margin: 0;
  color: white;
  border: solid 1px #DDD;
  border-radius: 3px;
  overflow: hidden;
`
const Name = styled.div`
  display: block;
  font-size: 11px;
  line-height: 16px;
  color: #333;
  text-align: center;
  width: 100%;
  white-space: normal;
  overflow: hidden;
  padding-left: 3px;
  padding-top: 2px;
`

export default LayoutCategoryList