import store from '../../index';
import { _removeModal, _setModal } from '../modal';



export const setModal = (name, data = false) => store.dispatch(_setModal( {name, data }));
export const removeModal = () => store.dispatch(_removeModal);