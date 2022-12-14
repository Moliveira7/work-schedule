import styles from './form.module.css';
import { Input } from "../Input";

export function Form() {
    return (
        <div className={styles.container}>
            <form action="">
                <div className={styles.schedule}>

                <label htmlFor="schedule">TIPO DE ESCALA</label>
                    <select name="schedule" id="">                        
                        <option value="1">6 X 1</option>
                    </select>

                    <div>
                        <label htmlFor="number">
                            Quantidade de Folgas:                            
                        </label>
                        <input type="number" />
                    </div>
                </div>
                

                <div className={styles.employees}>
                    <div>
                        <Input text="Digite o nome do Funcionário"/>
                        <Input text="Informe o horário de Trabalho"/>
                        <Input text="Preferência de Folga"/>
                    </div>

                    <div>
                        <button>
                            Inserir
                        </button>
                    </div>

                </div>

            </form>
        </ div>

        )
}