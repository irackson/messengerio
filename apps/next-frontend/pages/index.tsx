import styles from './index.module.scss';
import { Login } from '@irackson/useful-comps';
export function Index() {
    return (
        <div className={styles.page}>
            <Login></Login>
        </div>
    );
}

export default Index;
