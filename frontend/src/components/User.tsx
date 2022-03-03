import React from "react"

type IUser = {
    name: string
    email: string
}

type Props = {
    user: IUser
}

const User: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <strong>Nome: </strong>{user.name} <br />
            <strong>E-mail: </strong> {user.email} <br />
        </div>
    )
}

export default User