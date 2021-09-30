import { useState } from 'react'
import helpers from '../../utils'
import { Row, SectionWrapper } from '../../components/rows/'
import { ResetModal } from '../../components/'
import './style.css'
const { jsonFile } = helpers

const SettingsPane = (props) => {
  const getHistoryLength =
    parseInt(localStorage.getItem('history-length')) || 100

  const [resetStorage, setResetStorage] = useState(false)
  const [historyLength, setLength] = useState(getHistoryLength)

  const handleLengthChange = (e) => {
    if (e.target.value === '' || parseInt(e.target.value) < 1) {
      setLength(1)
    } else {
      setLength(e.target.value)
    }
  }

  const clearStorage = (e) => {
    setResetStorage(true)
    if (e.target.innerHTML === `I'm Sure`) {
      localStorage.setItem('ghPlagiarismHistory', '[]')
      localStorage.setItem('gh-scratchpad', '')

      window.location.reload()
    } else if (e.target.innerHTML === `Cancel`) {
      setResetStorage(false)
    }
  }

  return (
    <section
      className='hidden fs-modal-div settings-pane'
      ref={props.settingsPopup}
    >
      <button
        className='btnReset inputIcon'
        onClick={() => {
          localStorage.setItem('history-length', historyLength)
          props.toggleModel(props.settingsPopup)
          props.setSearchHistory([
            ...props.searchHistory.slice(0, historyLength),
          ])
        }}
      >
        <i className='fas fa-times'></i>
      </button>

      <h1>Settings</h1>
      <SectionWrapper title='General Settings'>
        <Row
          title='Reset Search History & Scratchpad'
          faClasses='fas fa-sync-alt'
          onClick={(e) => clearStorage(e)}
        />
        <Row
          title='Maximum Search History Length'
          historyLength={historyLength}
          setLength={(e) => handleLengthChange(e)}
        />
        {resetStorage ? (
          <ResetModal
            text={`Are you sure you'd like to reset your search history and notes?`}
            handleClick={clearStorage}
          />
        ) : null}
      </SectionWrapper>
      <SectionWrapper title='Export Data'>
        <Row
          title='Export Search History as JSON File'
          faClasses='fas fa-file-download'
          onClick={() =>
            jsonFile(
              'gh-search-history.json',
              localStorage.getItem('ghPlagiarismHistory')
            )
          }
        />
        <Row
          title='Export Notes as Text File'
          faClasses='fas fa-file-download'
          onClick={() =>
            jsonFile(
              'gh-search-notes.txt',
              localStorage.getItem('gh-scratchpad')
            )
          }
        />
        <Row
          title='Open Search History in New Tab'
          faClasses='fas fa-align-left'
          onClick={() =>
            jsonFile(
              'gh-search-history.json',
              JSON.parse(localStorage.getItem('ghPlagiarismHistory')),
              true
            )
          }
        />
        <Row
          title='Open Notes in New Tab'
          faClasses='fas fa-align-left'
          onClick={() =>
            jsonFile(
              'gh-search-notes.txt',
              localStorage.getItem('gh-scratchpad'),
              true
            )
          }
        />
      </SectionWrapper>
      <SectionWrapper title='About'>
        <Row
          title='Github Repo'
          faClasses='fab fa-github'
          onClick={(e) =>
            window.open('https://github.com/teamjuli0/gh-plagiarism', '_blank')
          }
        />
        <Row
          title='Feature Requests'
          faClasses='fas fa-lightbulb'
          onClick={(e) =>
            window.open(
              'https://github.com/teamjuli0/gh-plagiarism/issues',
              '_blank'
            )
          }
        />
        <Row
          title='Leave a Review!'
          faClasses='fas fa-smile-beam'
          onClick={(e) =>
            window.open(
              'https://chrome.google.com/webstore/detail/gh-plagiarism-check/fbnkdiommanmaggjbppgecgpekigaceb/reviews',
              '_blank'
            )
          }
        />
      </SectionWrapper>
    </section>
  )
}

export default SettingsPane
