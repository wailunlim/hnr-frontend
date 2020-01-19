import { storage } from '../firebase/init.js'
import firebase from 'firebase'

export const db = firebase
    .initializeApp({ storageBucket: "samurai-e00ed.appspot.com" })
    .storage();

export default {
    methods: {
        uploadFile(e) {
            const file = e.target.files[0];
            storage.ref('images/' + file.name).put(file)
                .then(response => {
                    response.ref.getDownloadURL().then((downloadURL) => {
                        firebase.database().ref(YOUR_DATABASE).child(THE_USER_ID).update({ imageUrl: downloadURL })
                    }                 
					.catch(err => console.log(err))
				}
	}
}