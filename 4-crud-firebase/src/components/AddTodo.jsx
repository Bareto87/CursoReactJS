import { useState } from "react";
import { db } from "../data/firebase";
import { addDoc, collection,updateDoc } from "firebase/firestore";

export function AddTodo() {
    const [ title, setTitle] = useState([])
    const insertar = async(e)=>{
        e.preventDefault();
        if(title!==""){
            await addDoc(collection(db, "todos"),{
                title,
                completed: false
            });
            setTitle("")
        }
    }

    return (
    <form onSubmit={insertar}>
        <div>
            <input 
                type="text" 
                placeholder="Ingresar tarea..." 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="btn_container">
            <button>Insertar</button>
        </div>
    </form>
        );
}
