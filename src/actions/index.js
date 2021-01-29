import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'


export const fetchPostsAndUsers = () => async (dispatch, getState) => {

    await dispatch(fetchPosts()) // get posts

    _.chain(getState().posts) // set posts that they were got  the above
        .map('userId') // mapping userIds that each post
        .uniq() // filtered unique userIds 
        .forEach(id => dispatch(fetchUser(id))) //get userIds
        .value()
}


export const fetchPosts = () => async dispatch => {

    const response = await jsonPlaceholder.get('/posts')

    dispatch( {type: 'FETCH_POSTS', payload: response.data} )

}


// How to request with cache pattern 3
export const fetchUser = id => dispatch => _fetchUser(id, dispatch)
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type:'FETCH_USER', payload: response.data })
})
