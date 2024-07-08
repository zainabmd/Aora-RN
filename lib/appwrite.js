import { Account, Avatars, Client, Databases,ID, Query,Storage} from 'react-native-appwrite';

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
    const avatars= new Avatars(client);
    const databases=new Databases(client);
    const storage= new Storage(client);

// Register User
export async function createUser(email, password, username) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw new Error('Account creation failed');

        const avatarUrl = avatars.getInitials(username);

        // Sign in the user after creation
        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: email,
                username: username,
                avatar: avatarUrl,
            }
        );

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

// Sign In
export async function signIn(email, password) {
    try {
        const session = await account.createSession(email, password); // -createEmailSession

        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

// Get Account
export async function getAccount() {
    try {
        const currentAccount = await account.get();

        return currentAccount;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

// Get Current User
export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();
        if (!currentAccount) throw new Error('No current account found');

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        );

        if (!currentUser) throw new Error('No user found for the current account');

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}