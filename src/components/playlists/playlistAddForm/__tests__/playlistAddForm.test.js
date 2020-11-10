import React from 'react'
import ReactDOM from 'react-dom'
import PlaylistAddForm from '../PlaylistAddForm'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { renderWithRouter } from '../../../../setupTests'
import { cleanup, fireEvent } from '@testing-library/react'

const mockProps = {
  addPlaylist: jest.fn(),
  clearState: {name: ""},
}

afterEach(cleanup)

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Router><PlaylistAddForm /></Router>, div)
})

it ('matches the snapshot', () => {
  const tree = renderer.create(<Router><PlaylistAddForm {...mockProps}/></Router>).toJSON()
  expect(tree).toMatchSnapshot()
})

it ('redirects to the /bookshelves route after submission if brought up from that route', ()=> {
  const { getByTestId, history } = renderWithRouter(<PlaylistAddForm {...mockProps}/>, {route: '/bookshelves'})
  fireEvent.click(getByTestId('add-playlist-submit'))
  expect(history.location.pathname).toBe('/bookshelves')
})

it ('redirects to the /resources route after submission if brought up from that route', ()=> {

})

it ('triggers addPlaylist function on submission', () => {

})

it ('triggers addPlaylist with the correct arguments on submission', () => {

})