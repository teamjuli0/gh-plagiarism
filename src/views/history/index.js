import './style.css'
import helpers from '../../utils'

const { bgColorBool, searchStr } = helpers

const History = (props) => {
  return (
    <section className='container'>
      {
        // if there is no searches in history, display appropriate h1 element
        props.searchHistory.length === 0 ? (
          <h1 id='noQueries'>Enter Search Query Above!</h1>
        ) : (
          // if search history has one or more items, only grab the first 10 items and display one row per search
          <>
            {props.searchHistory.map((search, i) => (
              <>
                <div
                  class='searchDiv'
                  style={
                    // alternate between background colors
                    bgColorBool(
                      i,
                      '#424242',
                      '#303030',
                      i === props.searchHistory.length - 1
                        ? {
                            marginBottom: '60px',
                          }
                        : null
                    )
                  }
                >
                  <a
                    className='btnReset'
                    href={search.url}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <p className='searchQuery'>{searchStr(search.url)}</p>
                    <p className='searchDate'>
                      {/* Create date and time string */}
                      Searched on {search.date.split(',')[0]} at{' '}
                      {search.date.split(',')[1]}
                    </p>
                  </a>
                  <button
                    className='btnReset deleteQueryBtn'
                    onClick={() =>
                      // when clicking the backspace button, remove that specific search based on the item's date
                      props.setSearchHistory(
                        props.searchHistory.filter((stateSearch) =>
                          search.date !== stateSearch.date ? true : false
                        )
                      )
                    }
                  >
                    <i className='fas fa-backspace'></i>
                  </button>
                </div>
              </>
            ))}
          </>
        )
      }
    </section>
  )
}

export default History
