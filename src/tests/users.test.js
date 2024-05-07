// You already have the methods imported
import { default as expect } from "expect";
import { getUser, getUsers } from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

const users = require("../users");
const {
    getUsers,
    getUser,
} = require("../users");

test('getUser', () => {
    it('Find the user by id', () => {
        const user = users[0];
        expect(getUser)
    });

});

test('getUsers', () => {
    it('Find users', () => {
        const user = users[0];
        expect(getUsers)
    });

});


