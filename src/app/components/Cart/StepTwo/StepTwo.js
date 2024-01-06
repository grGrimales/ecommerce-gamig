

import { Separator } from '../../Shared/Separator/Separator';
import { Addresses } from './Addresses';
import styles from './StepTwo.module.scss';



export const StepTwo = ({games}) => {
  return (
    <div className={styles.stepTwo}>

        <div className={styles.center}>
         <Addresses/>
            <Separator height={50} />


            <div className={styles.right}>
                <p>Resumen</p>
                </div>

        </div>
    </div>
  )
}
