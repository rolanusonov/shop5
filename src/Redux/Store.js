import {createStore} from "redux";
import {reducer} from "./Reduser"
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(reducer,composeWithDevTools())

<<<<<<< HEAD

=======
>>>>>>> 4d5cb9b7dba2cdadafcddea4fffee251099ac18a
