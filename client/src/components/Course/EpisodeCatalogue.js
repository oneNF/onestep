import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ChapterIcon from '../../assets/ChapterIcon.svg'
import EpisodeIcon from '../../assets/EpisodeIcon.svg'

export default ({ header, section, courseName }) => (
  <EpisodesWrap>
    <EpisodeChapter>
      <img src={ChapterIcon} alt={'ChapterIcon'} />
      <h1>{header}</h1>
    </EpisodeChapter>
    {
      section.map(
        t => (
          <EpisodeLink key={t.link}>
            <img src={EpisodeIcon} alt={'EpisodeIcon'} />
            <EpisodeTitle to={`/${courseName}/${t.link}`}>{t.title}</EpisodeTitle>
          </EpisodeLink>
        )
      )
    }
  </EpisodesWrap>
)

const EpisodesWrap = styled.div`
  margin: 10px;
  padding: 5px;
  text-decoration: none;
  text-align: left;
  color: #212121;
  border-radius: 40px;
  @media (min-width: 1024px) {
    padding: 5px 50px;
  }
`

const EpisodeChapter = styled.div`
  display: flex;
  color: #000000;
  margin-bottom: 10px;
  h1 {
    margin-left: 10px;
    font-size: 1.2em;
    ${'' /* font-weight: 300; */}
  }
  img {
    ${'' /* width: 1.2em; */}
    width: 25px;
  }
  @media (min-width: 1024px) {
    h1 {
      ${'' /* margin-left: 20px; */}
      margin-left: 25px;
      font-size: 23px;
      font-weight: 400;
    }
  }
`

const EpisodeLink = styled.div`
  display: flex;
  margin-left: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #D8D8D8;
  img {
    ${'' /* width: 0.9em; */}
    width: 19px;
  }
  @media (min-width: 1024px) {
    margin-left: 22px;
    ${'' /* margin-bottom: 18px; */}
    font-weight: 400;
  }
`

const EpisodeTitle = styled(Link)`
  display: block;
  margin-left: 15px;
  text-decoration: none;
  color: #000000;
  font-size: 1em;
  ${'' /* font-weight: 300; */}
  @media (min-width: 1024px) {
    margin: 12px auto;
    margin-left: 30px;
    font-size: 1em;
  }
`
