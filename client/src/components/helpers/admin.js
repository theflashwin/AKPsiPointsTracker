import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import emailjs from '@emailjs/browser';

export async function login(admin) {

    if (admin.username == "" || admin.password == "") {
        toast.warn('Please make sure all fields are filled properly', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        return;
    }

    await axios.get(`http://localhost:8080/admin/login?username=${admin.username}&password=${admin.password}`)
    .then((response) => {
        if (response.data === "success") {
            window.localStorage.setItem("isAdmin", true)
            window.location.href = "../admin"
        } else {
            toast.error('Invalid Admin Credentials', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    })
    .catch((error) => {
        toast.error('Network Error Occured, try again later.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    })

}

export function logout() {
    localStorage.setItem('isAdmin', false)
}

export async function newUser(user) {

    await axios.get(`http://localhost:8080/admin/newuser?firstname=${user.firstname}&lastname=${user.lastname}&email=${user.email}&points=${user.points}&pledgeSemester=${user.pledgeSemester}&standing=${user.standing}&status=${user.status}`)
    .then((response) => {

        if (response != "error") {

            console.log(response)

            const message = `localhost:3000/user/setup?code=${response.data.code}&id=${response.data.userid}`

            // send email
            emailjs.send('service_nvg6f58', 'template_xp534ij', {
                to_name: user.firstname + " " + user.lastname,
                message: message,
                to_email: user.email,
            }, 'UQPchKzb9sWnQ-kLS')

            console.log("sent email")

            toast.success('Sent registration email successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        } else {
            toast.error('Some error occured during registration', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    })
    .catch((error) => {

        console.log(error)

        toast.error('Some network error occured, try again later', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    })

}