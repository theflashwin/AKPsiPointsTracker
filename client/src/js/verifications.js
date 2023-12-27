import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export function verifyIsAdmin() {
    
    if (localStorage.getItem('isAdmin') == 'true') {
        return true
    } else {
        return false
    }

}

export async function verifyUser() {

    let x = false
    
    if (localStorage.getItem('token') != null) {

        await axios.get("http://localhost:8080/users/verifytoken", {
            headers: {
                'token': JSON.parse(localStorage.getItem('token'))
            }
        })
        .then((response) => {
            if (response.data === "success") {
                x = true
            } else {
                x = false
            }
        })
        .catch((error) => {
            x = false
        })

    } else {
       x = false
    }

    Promise.resolve(x)
    return x

}

export function verifyPasswords(pwd, cpwd) {

    if (pwd.length < 6) {
        toast.error('Password must be longer than 6 characters', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        return false
    }

    console.log(pwd)
    console.log(cpwd)

    if (pwd != cpwd) {
        toast.error('Passowords must match!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        return false
    } else {
        return true
    }

}

export async function verifySecurityCode(code, id) {

    await axios.get(`http://localhost:8080/users/verifycode?code=${code}&id=${id}`)
    .then((response) => {

        console.log(response)

        if(response.data == "found") {
            console.log("weglwkn")
            return true
        } else {
            return false
        }

    })
    .catch((error) => {

        console.log(error)
        return false

    })

}