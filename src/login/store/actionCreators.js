import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

export const changeLogin = () => ({
    type: constants.CHANGE_LOGIN_TRUE,
});
export const changeLogout = () => ({
    type: constants.CHANGE_LOGIN_FALSE,
});
export const getAccountValue = (value) => ({
    type: constants.GET_ACCOUNT_VALUE,
    value: fromJS(value)
});
export const getPasswordValue = (value) => ({
    type: constants.GET_PASSWORD_VALUE ,
    value: fromJS(value)
});
export const getLogin = (accountEle, passwordEle) => {
    return (dispatch) => {
        axios.get('./api/account.json', {
            param: {
                account: accountEle,
                password: passwordEle
            }
        }).then(res => {
            const data = res.data.data;
            if (data.account === accountEle && data.password === passwordEle) {
                dispatch(changeLogin())
            }
        }).catch(e => {
            console.log(e);
        })
    }
}