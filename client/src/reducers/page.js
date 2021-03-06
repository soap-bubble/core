import createReducer from './createReducer';
import {
  CHANGE_PAGE,
} from '../actions/types';

const available = [{
  route: 'about',
  label: 'About',
}, {
  route: 'examples',
  label: 'Gallery',
}];

const reducer = createReducer({
  current: available[1],
  available,
}, {
  [CHANGE_PAGE](page, { payload: route }) {
    const current = available.find(a => route === a.route);
    return {
      ...page,
      current,
    };
  },
});

export default reducer;
