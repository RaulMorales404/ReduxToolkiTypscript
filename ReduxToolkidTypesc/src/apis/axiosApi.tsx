import axios from "axios";
import {REACT_APP_DEV_APPI} from "@env";

export const api = axios.create();
api.defaults.baseURL = REACT_APP_DEV_APPI;