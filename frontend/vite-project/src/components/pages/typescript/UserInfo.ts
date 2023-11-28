export default function UserInfo() {
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const password = (document.getElementById("password") as HTMLInputElement)?.value;
    const confirmPassword = (document.getElementById("confirm-password") as HTMLInputElement)?.value;
}