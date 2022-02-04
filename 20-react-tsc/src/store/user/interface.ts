import {DefaultRootState} from "react-redux";

export interface UserRootState extends DefaultRootState {
  user: string
}