import dotenv from 'dotenv';
import {faker} from '@faker-js/faker';
dotenv.config();

export const URL = {
    PRODUCTION : 'https://www.saucedemo.com/', // url already public, no need to hide it
    PREPRODUCTION : process.env.PREPRODUCTION_URL // example of pre-production private environment/url
}

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME: faker.internet.userName(),
        PASSWORD: faker.internet.password(8)
    }
}

export const USER_DATA = {
    NAME:{
        FIRST_NAME: process.env.FIRST_NAME,
        LAST_NAME: process.env.LAST_NAME
    },
    ADDRESS:{
        POSTAL_CODE: faker.address.zipCode()
    }
}