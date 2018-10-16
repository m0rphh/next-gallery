import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const styles = {
	paperAnchorDockedLeft: {

	},
	paper: {
		backgroundColor: 'rgba(0,0,0, 0.7)',
	},
	modal: {
		// background: 'linear-gradient(90deg,  #2C5364 10%, #0F2027 50%)',
		background: 'linear-gradient(90deg,  #2C5364 100%, #0F2027 50%)',
		opacity: .75,
	}
};

export default withStyles(styles)(class MenuDrawer extends Component {


	constructor(props) {
		super(props);
		this.state = { open: false };
	}


	handleToggle = () => this.setState({ open: !this.state.open });
	render() {
		const { classes } = this.props;

		return (
			<div >
				{/* <RaisedButton
          label="Toggle menu"
          onClick={this.handleToggle}
        /> */}
				<div style={{ position: 'absolute', right: 50, top: 50, zIndex: 100 }}>
					<IconButton onClick={this.handleToggle} style={{ outline: 'none' }}>
						<MenuIcon style={{ fontSize: 40, color: 'white', outline: 'none' }} />
					</IconButton>
				</div>
				<Drawer open={this.state.open}
					ModalProps={{ onBackdropClick: this.handleToggle }}
					anchor="right"
					variant="temporary"
					classes={{ paper: styles.paper }}
					{...this.props}
				>
					<div style={{ width: 200 }}>
						{this.props.children}
					</div>
				</Drawer>
			</div>
		);
	}
}
)
