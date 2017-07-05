import { connect } from 'react-redux';

import MsgList from '../pures/MsgList';

const mapStateToProps = (state, ownProps) => {
	return {
		messages: state.messages
	}
}

export default connect(mapStateToProps)(MsgList);
