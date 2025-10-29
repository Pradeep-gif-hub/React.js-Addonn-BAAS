import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService{ 
    client=new Client(); 
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) //Appwrite Endpoint
        .setProject(conf.appwriteProjectId); //project ID
        this.account=new Account(this.client);
    }


    async createAccount(email,password,name){
        try{
            const userAccount=await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if(userAccount){
                //call another method
                return this.login(email,password);

            }
            else{
                return userAccount
            }
        } catch(error){
            throw error;
        }
    }
    async login(email,password){

        try{
            return this.account.createEmailSession(
                email,
                password
            );
        } catch(error){
            throw error;  
        }
        }

    async getCurrentUser(){
        try{
            return this.account.get();
        } catch(error){
            console.log("APPwrite Service: getcurrentuser:: error", error);  
        }

        return null;

}
    async logout(){
        try{
            return this.account.deleteSession('current');
        } catch(error){
            console.log("APPwrite Service: logout:: error", error);  
        }
}
}
const authService=new AuthService();
export default authService;