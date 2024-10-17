import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './index.css'
import Main from './main/page'
import SignIn from './signin/page'

ReactDOM.render(
	<Router>
		<Routes>
			<Route path='/main' element={<Main />} />
			<Route path='/signin' element={<SignIn />} />
		</Routes>
	</Router>,
	document.getElementById('root')
)
