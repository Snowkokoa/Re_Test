import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Section from "./component/Section";

function App() {
	return (
		<>
			<GlobalStyle/>
			<ThemeProvider theme={deviceSize}>
				<Header/>
				<Nav/>
				<Section/>
			</ThemeProvider>
		</>
	);
}

export default App;