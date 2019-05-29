import './mx.css';
import "./index.css";

import riot from "riot";
import "./tags/signin.tag";
import route from "riot-route";
import {mxFirebase} from  './mx';
var firebaseConfig = {
     apiKey: "AIzaSyDz99rwz1zGk5Vhj3pY_dwR-D5Jps6BHYw",
     authDomain: "code-camp-2019-demo-bd2f6.firebaseapp.com",
     databaseURL: "https://code-camp-2019-demo-bd2f6.firebaseio.com",
     projectId: "code-camp-2019-demo-bd2f6",
     storageBucket: "code-camp-2019-demo-bd2f6.appspot.com",
     messagingSenderId: "335913810624",
     appId: "1:335913810624:web:e61bc92a6800c44e"
};

// mxFirebase.init(firebaseConfig)

// mxFirebase.signIn();

route.base("/")
route("/signin", async() => {
    riot.mount("#root", "signin")
    await mxFirebase.signIn("aa", "aa");
})

route.start(true);