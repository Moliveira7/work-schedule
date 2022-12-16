import styles from './form.module.css';
import { Input } from "../Input";

export function Form() {
    return (
        <div className={styles.container}>
            <form action="" className='form-employees'>

                <div className={styles.schedule}>

                    <label htmlFor="schedule">TIPO DE ESCALA: 
                        <select name="schedule" id="">                        
                            <option value="1">6 X 1</option>
                            <option value="1">5 X 2</option>
                            <option value="1">12 X 36</option>
                        </select>
                    </label>
                    <label htmlFor="number">Quantidade de Folgas: 
                        <input type="number"/>                           
                    </label>    
                </div>
                

                <div className={styles.employees}>
                    <div>
                        <Input text="Digite o nome do Funcionário"/>
                        <Input text="Informe o horário de Trabalho"/>
                        <Input text="Preferência de Folga"/>
                    </div>
                        <button className={styles.insert}>Inserir </button>
                </div>

            </form>
        </ div>

        )
}