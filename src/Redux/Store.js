import {createStore} from "redux";
import {reducer} from "./Reduser"
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(reducer,composeWithDevTools())

<<<<<<< HEAD

=======
>>>>>>> 6b09d12ee987db75ba2bd937c0dd4f1f0b8b7bf6
