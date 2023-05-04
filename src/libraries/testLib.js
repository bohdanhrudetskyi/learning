//-----------------------------------------------------------------------------
//                      testLib file v. 0.0.0.1
//-----------------------------------------------------------------------------
import {
    VALID_SEARCH_REPO_NAME,
    VALID_USERNAME,
    VALID_PASSWORD,
    INVALID_USERNAME,
    INVALID_PASSWORD,
    EXPECTED_SUCCESS_LOGIN_TEXT,
    COUNT_OF_IMAGES_ON_BROKEN_IMAGES_PAGE,
    ADD_REMOVE_PAGE_TITLE,
    NOT_DISPLAYED_IMAGES_ON_BI_PAGE
} from "../../src/libraries/constants.js"
//------------This is a random generator for buttons clicking------------------
export function getRandomInteger (min = 1, max = 50) {
    return Math.floor(Math.random() * (max - min) + min);
}

//-----------------------------------------------------------------------------
export {
    VALID_SEARCH_REPO_NAME,
    VALID_USERNAME,
    VALID_PASSWORD,
    INVALID_USERNAME,
    INVALID_PASSWORD,
    EXPECTED_SUCCESS_LOGIN_TEXT,
    COUNT_OF_IMAGES_ON_BROKEN_IMAGES_PAGE,
    ADD_REMOVE_PAGE_TITLE,
    NOT_DISPLAYED_IMAGES_ON_BI_PAGE
}