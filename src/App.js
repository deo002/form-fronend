import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PersonalInformation from './components/personalInformation';
import DegreeInformation from './components/degreeInformation';
import ContactInformation from './components/ContactInformation';
import Update from './components/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<Navbar />
					<Container>
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/register' component={Form} />
							<Route path='/personal-information' component={PersonalInformation} />
							<Route path='/degree-information' component={DegreeInformation} />
							<Route path='/contact-information' component={ContactInformation} />
							<Route path='/update' component={Update} />
						</Switch>
					</Container>
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;
