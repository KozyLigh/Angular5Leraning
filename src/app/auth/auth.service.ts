import * as firebase from 'firebase';

export class AuthService {
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            // .then(success => console.log(success))
            .catch(
                error => console.log(error)
            );
    }
}