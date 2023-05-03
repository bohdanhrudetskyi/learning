//testLib file v. 0.0.0.1
import {
    VALID_SEARCH_REPO_NAME,
    VALID_USERNAME,
    VALID_PASSWORD,
    EXPECTED_SUCCESS_LOGIN_TEXT
} from "../../src/libraries/constants.js"
//------------This is a random generator for buttons clicking------------------
export function getRandomInteger (min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min) + min);
}

//-----------------------------------------------------------------------------
export {
    VALID_SEARCH_REPO_NAME,
    VALID_USERNAME,
    VALID_PASSWORD,
    EXPECTED_SUCCESS_LOGIN_TEXT
}