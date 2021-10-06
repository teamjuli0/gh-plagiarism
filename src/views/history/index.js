import './style.css'
import uniqid from 'uniqid'
import { useData, helpers } from '../../utils/'
const { bgColorBool, searchStr } = helpers

const History = () => {
  const { data, updateData } = useData()
  return (
    <section className='container'>
      {
        // if there is no searches in history, display appropriate h1 element
        data.history.length === 0 ? (
          <div id='noQueries'>
            <h1>Cat Say Meow We Can Search...</h1>
            <h6>Dad puns will never die</h6>
            <i className='fas fa-cat fa-6x'></i>
          </div>
        ) : (
          // if search history has one or more items, only grab the first 10 items and display one row per search
          <>
            {data.history.map((search, i) => (
              <div
                className='searchDiv'
                key={uniqid()}
                style={
                  // alternate between background colors
                  bgColorBool(
                    i,
                    '#424242',
                    '#303030',
                    i === data.history.length - 1
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
                    updateData({
                      ...data,
                      history: data.history.filter((stateSearch) =>
                        search.date !== stateSearch.date ? true : false
                      ),
                    })
                  }
                >
                  <i className='fas fa-backspace'></i>
                </button>
              </div>
            ))}
          </>
        )
      }
    </section>
  )
}

export default History
