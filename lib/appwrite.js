import { Account, Client } from 'react-native-appwrite';

export const config={
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.rn.aora',
    projectId:'667ec0b5002915dd5062',
    databaseId:'667ec69a00069fc1e927',
    userCollectionId:'667ec6ec0016c9d5ca22',
    videoCollectionId:'667ec73e002241b9d558',
    storageId:'667ee296000a2d98ecaa'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;
    const account = new Account(client);

// Register User
export const createUser =()=>{

    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}