//-----------------------------------------------------------------------------
//                      testLib file v. 0.0.0.2
//-----------------------------------------------------------------------------
import {
    VALID_SEARCH_REPO_NAME,
    VALID_USERNAME,
    VALID_PASSWORD,
    INVALID_USERNAME,
    INVALID_PASSWORD,
    EXPECTED_SUCCESS_LOGIN_TEXT,
    COUNT_OF_IMAGES_ON_BROKEN_IMAGES_PAGE,
    ADD_REMOVE_PAGE_TITLE_TEXT,
    NOT_DISPLAYED_IMAGES_ON_BI_PAGE,
    CHECKBOXES_PAGE_HEADER_TEXT,
    ADD_REMOVE_PAGE_HEADER_TEXT,
    DISAPPEARING_ELEMENTS_HEADER_TEXT,
    DISAPPEARING_ELEMENTS_HOME_LINK_TEXT,
    DISAPPEARING_ELEMENTS_ABOUT_LINK_TEXT,
    DISAPPEARING_ELEMENTS_CONTACT_US_LINK_TEXT,
    DISAPPEARING_ELEMENTS_PORTFOLIO_LINK_TEXT,
    DISAPPEARING_ELEMENTS_GALLERY_LINK_TEXT,
    START_PAGE_URL
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
    ADD_REMOVE_PAGE_TITLE_TEXT,
    NOT_DISPLAYED_IMAGES_ON_BI_PAGE,
    CHECKBOXES_PAGE_HEADER_TEXT,
    ADD_REMOVE_PAGE_HEADER_TEXT,
    DISAPPEARING_ELEMENTS_HEADER_TEXT,
    DISAPPEARING_ELEMENTS_HOME_LINK_TEXT,
    DISAPPEARING_ELEMENTS_ABOUT_LINK_TEXT,
    DISAPPEARING_ELEMENTS_CONTACT_US_LINK_TEXT,
    DISAPPEARING_ELEMENTS_PORTFOLIO_LINK_TEXT,
    DISAPPEARING_ELEMENTS_GALLERY_LINK_TEXT,
    START_PAGE_URL
}