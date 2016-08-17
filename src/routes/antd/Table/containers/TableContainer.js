import { connect } from 'react-redux';
import {fetch, onChange} from '../modules/table';
import AntTable from '../components/Table';

const mapActionCreators = {
  fetch,
  onChange
}

const mapStateToProps = (state)=> ({
  table: state.table
})

export default connect(mapStateToProps, mapActionCreators)(AntTable);
