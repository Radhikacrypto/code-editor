import { mutation } from "./_generated/server"
import { v } from "convex/values";

export const syncUser= mutation({
 args:{
    userId: v.string(),
    email: v.string(),
    name: v.string(),
 },

 handler : async(convexToJson, args)=>{
    //checking if user exists or not 
    const exis
 }
})