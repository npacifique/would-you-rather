import React, { Component } from "react"
import { Link } from "react-router-dom"
import { AiOutlineWarning } from "react-icons/ai";

class PageNotFound extends Component {
	render() {
		return (
			<div className="pageNotFound">
			<AiOutlineWarning style={{fontSize: "82px", color:"#ffbb33"}}/>
				<h1>404</h1>
				<p>Page Not Found</p>
				<br />
				<button>
					<Link to="/">Go to home</Link>
				</button>
			</div>
		)
	}
}

export default PageNotFound
