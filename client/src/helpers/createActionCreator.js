import Fetch from './fetch';

export default class CreateActionCreator {

    static read = ({ type, ...options }) => CreateActionCreator.dispatch(Fetch.get(options), type);

    static create = ({ type, ...options }) => CreateActionCreator.dispatch(Fetch.post(options), `${type}`);

    static update = ({ type, ...options }) => CreateActionCreator.dispatch(Fetch.put(options), `${type}`);

    static delete = ({ type, ...options }) => CreateActionCreator.dispatch(Fetch.delete(options), `${type}`);

    static dispatch = (promise, type) => dispatch => {
        promise
            .then(response => dispatch({
                type,
                payload: response,
            }))
            .catch(error => dispatch({
                type: `${type}`,
                payload: error,
            }));

        return promise;
    };

};
