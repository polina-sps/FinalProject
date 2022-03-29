import React from 'react'
import { connect } from 'react-redux'

import { commentsDataSelector } from '../../ducks/comments/selectors'
import { getCommentsAction } from '../../ducks/comments/actions'

class DataList extends React.Component {
  handleClick = () => {
    const { actionGetCommentsAction, url } = this.props

    actionGetCommentsAction(url)
  }

  render() {
    console.log({ props: this.props })

    return (
      <div>
        Datalist<button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: commentsDataSelector(state), // export const postsSelector = (state) => state.posts.data;
})

const mapDispatchToProps = (dispatch) => ({
  actionGetCommentsAction: (url) => {
    dispatch(getCommentsAction(url))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DataList)
