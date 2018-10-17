import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ToggleIcon from 'material-ui-toggle-icon';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const styles = {
	paperAnchorDockedLeft: {

	},
	paper: {
		backgroundColor: 'rgba(0,0,0, 0)',
	},
	modal: {
		// background: 'linear-gradient(90deg,  #2C5364 10%, #0F2027 50%)',
		// background: 'linear-gradient(90deg,  #2C5364 100%, #0F2027 50%)',
		backgroundColor: 'rgba(0,0,0, 0.75)',
		// opacity: .75,
	}
};

export default withStyles(styles)(class MenuDrawer extends Component {


	constructor(props) {
		super(props);
		this.state = {
			open: false,
			on: true
			 };
	}


	handleToggle = () => this.setState({ open: !this.state.open, on: !this.state.on });
	render() {
		const { classes } = this.props;

		return (
			<div >
				<div style={{ position: 'absolute', right: 50, top: 50, zIndex: 10000 }}>
					<IconButton onClick={this.handleToggle}  style={{ outline: 'none' }}>
						<ToggleIcon
							on={this.state.on}
							onIcon={<MenuIcon style={{ fontSize: 40, color: 'white', outline: 'none' }} />}
							offIcon={<CloseIcon style={{ fontSize: 40, color: 'white', outline: 'none' }} />}
						/>
					</IconButton>
				</div>
				<Drawer open={this.state.open}
					ModalProps={{ onBackdropClick: this.handleToggle }}
					anchor="paperAnchorDockedRight"
					// variant="persistent"
					classes={{ paper: styles.paper }}
					{...this.props}
				>
					<div style={{ width: '100vw' }}>
						{this.props.children}
					</div>
				</Drawer>
			</div>
		);
	}
}
)
