import styles from './index.module.scss';
import { UsefulComps } from '@irackson/useful-comps';
export function Index() {
    return (
        <div className={styles.page}>
            <UsefulComps></UsefulComps>
        </div>
    );
}

export default Index;
