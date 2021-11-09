import { useState, useRef } from 'react'
import { jsonFile } from '../../utils/'
import { Row, SectionWrapper } from '../../components/rows/'
import { ResetModal } from '../../components/'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import './style.css'

const SettingsPane = (props) => {
  const confirmDiv = useRef()

  const dispatch = useDispatch()
  const settings = useSelector((state) => state.settings)

  const { resetData, updateSettings } = bindActionCreators(
    actionCreators,
    dispatch
  )

  const [resetStorage, setResetStorage] = useState(false)
  const [confirmReset, setConfirmReset] = useState(false)

  const handleLengthChange = (e) => {
    const num = e.target.value

    switch (true) {
      case num === '' || parseInt(num) < 1:
        return updateSettings({ 'history-length': 1 }, () => {})
      case parseInt(num) > 200:
        return updateSettings({ 'history-length': 200 }, () => {})
      default:
        updateSettings({ 'history-length': JSON.parse(num) }, () => {})
    }
  }

  const clearStorage = (e) => {
    setResetStorage(true)
    if (e.target.innerHTML === `I'm Sure`) {
      setResetStorage(false)
      setConfirmReset(true)
      setResetStorage(false)

      resetData()
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
          props.toggleModel(props.settingsPopup)
          resetData()
          setTimeout(() => {
            setConfirmReset(false)
          }, 400)
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
          historyLength={settings['history-length']}
          setLength={(e) => handleLengthChange(e)}
        />
        {resetStorage ? (
          <ResetModal
            text={`Are you sure you'd like to reset your search history and notes?`}
            handleClick={clearStorage}
          />
        ) : null}
        {confirmReset ? (
          <div
            ref={confirmDiv}
            className='fade-in'
            style={{
              position: 'fixed',
              top: '103px',
              width: '100%',
              height: '35px',
              background: 'linear-gradient(227deg, #00aab2, #887aff)',
              backgroundSize: '200% 200%',
              animation: 'AnimationName 7s ease infinite, fadein 0.25s',
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              fontSize: '13px',
              fontFamily: 'Noto Sans',
            }}
          >
            <p
              style={{
                flex: '0 0 72%',
                paddingLeft: '10px',
              }}
            >
              Reset Successful! 🔥
            </p>
          </div>
        ) : null}
      </SectionWrapper>
      <SectionWrapper title='Export Data'>
        <Row
          title='Export Search History as JSON File'
          faClasses='fas fa-file-download'
          onClick={() =>
            jsonFile(
              'history.json',
              JSON.stringify(JSON.parse(localStorage.getItem('data')).history)
            )
          }
        />
        <Row
          title='Export Scratchpad as Text File'
          faClasses='fas fa-file-download'
          onClick={() =>
            jsonFile(
              'scratchpad.txt',
              JSON.parse(localStorage.getItem('data')).scratchpad
            )
          }
        />
        <Row
          title='Open Search History in New Tab'
          faClasses='fas fa-align-left'
          onClick={() =>
            jsonFile(
              'history.json',
              JSON.stringify(JSON.parse(localStorage.getItem('data')).history),
              true
            )
          }
        />
        <Row
          title='Open Notes in New Tab'
          faClasses='fas fa-align-left'
          onClick={() =>
            jsonFile(
              'scratchpad.txt',
              JSON.parse(localStorage.getItem('data')).scratchpad,
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
