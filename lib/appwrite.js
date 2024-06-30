import { Account, Avatars, Client, Databases } from 'react-native-appwrite';

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

// Register User
export const createUser = async (email,password,username)=>{
    try{
        const uniqueId = Date.now().toString();//replaing unique.ID()
        const newAccount= await account.create(
        uniqueId,
        email,password,username)

        if(!newAccount) throw Error;
        const avatarUrl=avatars.getInitials(username);
        await signIn(email,password);
        const newUser=await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            uniqueId,
            {
                accountId:newAccount.$id,email,username,avatar:avatarUrl
            })
            return newUser;
    }
    catch (error){
        console.log(error)
        throw new Error(error);
    }
    // const uniqueId = Date.now().toString();
    // account.create(uniqueId, 'me@example.com', 'password', 'Jane Doe') //changed unique.ID() to uniqueId from line above
    //     .then(function (response) {
    //         console.log(response);
    //     }, function (error) {
    //         console.log(error);
    //     });
}
export async function signIn(email,password){
    try{
        const session=await account.createEmailSession(email,password)
        return session;
    }
    catch(error){
        throw new Error(error)
    }
}