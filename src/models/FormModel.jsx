export const generateUserId = ()=>{
    return `user_${Math.floor(Math.random() * 10000)}`;
}