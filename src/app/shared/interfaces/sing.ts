
export interface Sing extends singin{
  name: string,
  rePassword:string,
  phone:string
}
export interface singin {
  email: string;
  password: string;
}
export interface scseccsSsingup{
  
  message: string;
  user: User;
  token: string;
}
export interface User {
  name: string;
  email: string;
  role: string;
}
export interface failsingup{
  statusMsg: string;
  message: string;
}
export interface scseccsSingin {
  message: string;
  user: Userlog;
  token: string;
}

export interface Userlog {
  name: string;
  email: string;
  role: string;
}
export interface code {
  resetCode: string;
}
export interface Resetpasswod {
  email: string;
  newPassword: string;
}