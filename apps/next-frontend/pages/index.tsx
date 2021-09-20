import styles from './index.module.scss';
import { UsefulComps } from '@irackson/useful-comps';
import { Message } from '@irackson/useful-types';

const message: Message = { id: 'first message', message: 'hello world' };

export function Index() {
    return (
        <div className={styles.page}>
            <UsefulComps></UsefulComps>
            {JSON.stringify(message)}
        </div>
    );
}

export default Index;
