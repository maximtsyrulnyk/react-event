import { useState, Fragment, useEffect, useReducer } from "react";

import Title from "../../component/title";
import Grid from "../../component/grid";
import Box from "../../component/box";

import PostCreate from "../post-create";
import PostItem from "../post-item";

import {Alert, Skeleton, LOAD_STATUS} from "../../component/load";

import {getDate} from "../../util/getDate";
import {
    requestInitialState,
    requestReducer,
    REQUEST_ACTION_TYPE,
} from "../../util/request";

export default function Container() {
    const [state, dispatch] = useReducer(requestReducer, requestInitialState);

    const getData = async () => {
        dispatch({type: REQUEST_ACTION_TYPE.PROGRESS});
        try {
            const res = await fetch("https://localhost:4000/post-list");

            const data = await res.json();

            if(res.ok) {
                dispatch({
                    type: REQUEST_ACTION_TYPE.SUCCESS,
                    payload: convertData(data),
                });
            } else {
                dispatch({
                    type: REQUEST_ACTION_TYPE.ERROR,
                    payload: data.message,
                })
            }
        } catch (error) {
            setMessage(error.message);
            setStatus(LOAD_STATUS.ERROR);
        }
    };

    const convertData = (raw) => ({})
}

