import { connect } from 'react-redux';
import {fetchTable} from '../modules/table';
import AntTable from '../components/Table';

const mapActionCreators = {
  fetchTable
}

const mapStateToProps = {
  table: state.table
}

export default connect(mapStateToProps, mapActionCreators)(AntTable);
