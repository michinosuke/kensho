import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const CategoryContent = props => (
  <OuterTile>
    <Tile style={{ backgroundImage: `url(${props.content.image_url})` }}>
      <Link onClick={() => props.onClick(props.content.id)} />
    </Tile>
    <Name>{props.content.name}</Name>
  </OuterTile>
)

const OuterTile = styled.div`
  width: 43%;
  height: 50vw;
  margin: 5vw 3vw;
  ${media.greaterThan('medium')`
    width: 21%;
    height: 25vw;
    margin: 5vw 1.9vw;
  `}
  float: left;
  position: relative;
`
const Tile = styled.div`
  position: relative;
  width: 100%;
  height: 42vw;
  ${media.greaterThan('medium')`
    height: 22vw;
  `}
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: solid 3px #DDD;
  border-radius: 10px;
  overflow: hidden;
`
const Name = styled.div`
  display: inline-block;
  font-size: 16px;
  color: dimgray;
  text-align: center;
  width: 100%;
  margin-top: 5px;
`
const Link = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default CategoryContent