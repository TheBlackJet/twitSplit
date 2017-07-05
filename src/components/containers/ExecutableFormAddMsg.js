import { connect } from 'react-redux';

import FormAddMsg from '../pures/FormAddMsg';
import actions from '../../ducks/messages/actions';

console.log(actions);

export default connect(undefined, { addMessage: actions.addMessage })(FormAddMsg);
