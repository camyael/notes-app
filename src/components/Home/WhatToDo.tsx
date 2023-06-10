import create from '../../assets/landing-page/create.png';
import organize from '../../assets/landing-page/organize.png';
import save from '../../assets/landing-page/save.png';
import notes from '../../assets/landing-page/notes.png';

const WhatToDo = () => {
    return (
        <>
            <div className="landing-page-todo">
                <div className="todo-titles">
                    <h2 className="todo-title">Un refugio personal para tus notas y tus descubrimientos</h2>
                    <p>Descubre lo que puedes hacer en Sunny Thoughts</p>
                </div>
                <div className="todo-cards">
                    <div className="todo-cards-card">
                        <img src={create} alt=""/>
                        <p className='todo-card-title'>Crea</p>
                        <p className='todo-card-description'>Tus pensamientos importan. Inspírate y escribe tus ideas a través de notas en nuestra página.</p>
                    </div>
                    <div className="todo-cards-card">
                        <img src={organize} alt=""/>
                        <p className='todo-card-title'>Organiza</p>
                        <p className='todo-card-description'>Organiza tus ideas en notas, da forma a tus pensamientos y comparte tu visión con el mundo.</p>
                    </div>
                    <div className="todo-cards-card">
                        <img src={save} alt=""/>
                        <p className='todo-card-title'>Guarda</p>
                        <p className='todo-card-description'>No permitas que tus ideas se desvanezcan, guárdalas en notas y que se conviertan en la base de tus logros.</p>
                    </div>
                </div>
            </div>
            <div className='landing-page-divider'>
                <img src={notes} alt=""/>
            </div>
        </>
    )
}

export default WhatToDo;