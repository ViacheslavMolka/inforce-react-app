import { connect } from 'react-redux';

import { loadData, beerDelete, sortByName, sortByCount } from '../actions/actions';
import ItemList from '../components/ItemList';

const mapStateToProps = (state: any) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadBeers: () => dispatch(loadData()),
    beerDelete: (id: number) => dispatch(beerDelete(id)),
    sortByName: () => dispatch(sortByName()),
    sortByCount: () => dispatch(sortByCount()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
