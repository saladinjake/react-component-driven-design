import React, { Component } from "react";
import { ReactComponent as Error } from "../assets/img/error-boundary.svg";

class ErrorBoundary extends Component {
	state = {
		error: null,
		errorInfo: null,
	};

	componentDidCatch(error, errorInfo) {
		this.setState({
			error,
			errorInfo,
		});
	}

	reload = () => {
		window.location.reload();
	};

	render() {
		// If there are no errors render
		// the child components
		if (!this.state.errorInfo) {
			return this.props.children;
		}

		// Display custom UI if there are errors
		// in our application
		return (
			<div className="sampleui-error--page">
				<div className="sampleui-error--wrap">
					<div className="sampleui-card sampleui-404--wrap">
						<div className="sampleui-flex flex-column justify-center">
							<div className="sampleui-modal--content">
								<h4 className="color-black text-xbold text-center">Something went wrong</h4>
								<div className="sampleui-modal-illustration">
									<Error />
								</div>
								<div className="message-response withdrawal-response inactive-wrap">
									<p className="color-black">It's not you, its us. Kindly reload the page to continue.</p>
								</div>
								<div className="flex justify-center margin-top-5 inactivity-buttons margin-bottom-0">
									<div className="addAction sampleui-cta sampleui-cta-lg" onClick={this.reload}>
										Reload
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ErrorBoundary;
