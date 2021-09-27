import React from "react";
import './Main.css'

import Input from './Input'

 const Main = ({onSubmit}) =>
    <main className="main">
        <Input onSubmit={onSubmit}/>
    </main>

export default Main